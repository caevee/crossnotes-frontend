import React, { useState } from "react";
import axios from "axios";
import "./AddNote.css";

const AddNote = ({ fetchNotes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "content":
        setContent(e.target.value);
        break;
      default:
        break;
    }
  };
  const submitNote = () => {
    console.log(title, content);
    axios
      .post("https://crossnotes-api.herokuapp.com/notes/", {
        title: title,
        content: content,
      })
      .then((res) => {
        console.log(res.data);
        setTitle("");
        setContent("");
        fetchNotes();
      });
  };
  return (
    <div className="AddNote">
      <input
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Notiztitel"
        value={title}
      />
      <textarea
        onChange={handleChange}
        name="content"
        type="text"
        placeholder="Notizinhalt"
        value={content}
      />
      <button onClick={submitNote} type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default AddNote;
