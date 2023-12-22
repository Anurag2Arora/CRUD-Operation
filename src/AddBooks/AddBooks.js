import React from "react";
import { useState } from "react";
import axios from "axios";
import "./addbook.css";
export default function Post() {
  const [title, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");

  // console.log(name);
  const Hello = (e) => {
    // e.preventDefault();
    let formJson = {
      title: title,
      author: author,
      genre: genre,
      summary: summary,
    };
    const url = "http://localhost:3000/books";

    axios.post(url, formJson).then((res) => console.log(res));
  };
  return (
    <>
      <h5 style={{ textAlign: "center" }}>FULL CRUD APP</h5>
      <div className="addbook">
        <h4>AddBooks</h4>
        <form className="form">
          <label htmlFor="" className="addbook_label">
            Title:
          </label>
          <input
            type="text"
            className="addbook_input"
            value={title}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="" className="addbook_label">
            Author:
          </label>
          <input
            type="text"
            className="addbook_input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label htmlFor="" className="addbook_label">
            Summary:
          </label>
          <input
            type="text"
            className="addbook_input"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <label htmlFor="" className="addbook_label">
            Genre:
          </label>
          <input
            type="text"
            className="addbook_input"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <button type="submit" className="addbook_btn" onClick={Hello}>
            Add
          </button>
        </form>
      </div>
    </>
  );
}
