import React, { useState } from "react";
import axios from "axios";
import Edit from "./Edit";

const Note = ({ id, title, content, fetchNotes }) => {
  const [edit, setEdit] = useState(false);
  const deleteNote = () => {
    console.log("Delete Note: " + id);
    axios
      .delete(`https://crossnotes-api.herokuapp.com/notes/${id}`)
      .then(() => {
        fetchNotes();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <p>{id} </p>
        <p>{title}</p>
        <p>{content}</p>

        {edit && (
          <Edit
            id={id}
            title={title}
            content={content}
            fetchNotes={fetchNotes}
            setEdit={setEdit}
          />
        )}
        {!edit && (
          <>
            <button onClick={() => setEdit(true)}>Edit</button>
            <button onClick={deleteNote}>Delete</button>
          </>
        )}
      </div>
    </>
  );
};

export default Note;
