import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/firebase";

function DataFetcher({ onDataFetched, onError }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Check if data is available in local storage
      const cachedData = localStorage.getItem("cachedBlogs");

      if (cachedData) {
        // If cached data is available, parse and use it
        onDataFetched(JSON.parse(cachedData));
      }

      // Fetch data from Firestore
      const blogsCollection = collection(db, "blogs");

      try {
        const querySnapshot = await getDocs(blogsCollection);

        if (querySnapshot.size > 0) {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          // Save data to local storage for caching
          localStorage.setItem("cachedBlogs", JSON.stringify(data));

          onDataFetched(data);
        } else {
          console.log("No matching documents.");
        }
      } catch (error) {
        console.error("Error fetching documents: ", error);
        onError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [onDataFetched, onError]);

  return <div>{loading ? <h3 className="loading">Loading...</h3> : null}</div>;
}

export default DataFetcher;
