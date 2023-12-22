import React from "react";
import "./card.css";
import axios from "axios";
export default function Card({ item, id, title, author, genre, summary }) {
  const deleteBook = () => {
    const url = `http://localhost:3000/books/${id}`;
    axios.delete(url).then((res) => console.log(res));
    window.location.reload();
  };
  const updateBook = () => {
    const url = `http://localhost:3000/books/${id}`;
    axios.put(url, { title: "xyz" }).then((res) => console.log(res));
    window.location.reload();
  };

  return (
    <>
      <div className="main">
        <div className="card">
          <div className="card_title">Title:{title}</div>
          <div className="card_des">
            <p>author:{author}</p>
            <p>genre:{genre}</p>
          </div>
          <p className="summary">summary:{summary}</p>
          <div className="card_btn">
            <button onClick={updateBook} className="btn">
              Edit
            </button>
            <button onClick={deleteBook} className="btnd">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
