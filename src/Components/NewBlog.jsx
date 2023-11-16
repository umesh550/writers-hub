import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Config/firebase";

function NewBlog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const history = useNavigate();

  console.log(title);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };

    const addBlog = async () => {
      const docRef = await addDoc(collection(db, "blogs"), blog);
    };
    addBlog();
    history("/");
  };

  return (
    <div className="create-blog">
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label htmlFor="author">Blog Author: </label>
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label htmlFor="body">Blog Body: </label>
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default NewBlog;
