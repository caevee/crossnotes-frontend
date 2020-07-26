import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Edit.css";

const Edit = ({ id, title, content, fetchNotes, setEdit }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  useEffect((title, content) => {
    setNewTitle(title);
    setNewContent(content);
  }, []);
  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setNewTitle(e.target.value);
        break;
      case "content":
        setNewContent(e.target.value);
        break;
      default:
        break;
    }
  };
  const submitNote = () => {
    axios
      .patch(`https://crossnotes-api.herokuapp.com/notes/${id}`, {
        title: newTitle,
        content: newContent,
      })
      .then((res) => {
        console.log(res.data);
        setNewTitle("");
        setNewContent("");
        fetchNotes();
        setEdit(false);
      });
  };
  return (
    <div className="Edit">
      <input
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Title"
        value={newTitle}
      />
      <input
        onChange={handleChange}
        name="content"
        type="text"
        placeholder="Content"
        value={newContent}
      />
      <button onClick={submitNote}>Confirm</button>
    </div>
  );
};

export default Edit;
