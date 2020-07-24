import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <input
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Title"
        value={title}
      />
      <input
        onChange={handleChange}
        name="content"
        type="text"
        placeholder="Content"
        value={content}
      />
      <button onClick={submitNote} type="submit">
        Add Note
      </button>
    </div>
  );
};

export default AddNote;
