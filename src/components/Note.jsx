import React, { useState } from "react";
import axios from "axios";
import Edit from "./Edit";
import "./Note.css";

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
      <div className="Note">
        <div className="header">
          <h4>{title}</h4>
          <p>{content}</p>
        </div>

        <div className="controls">
          {!edit && (
            <>
              <i onClick={() => setEdit(true)} className="fas fa-edit"></i>
              <i onClick={deleteNote} className="fas fa-trash"></i>
            </>
          )}
        </div>
      </div>
      <div>
        {edit && (
          <Edit
            id={id}
            title={title}
            content={content}
            fetchNotes={fetchNotes}
            setEdit={setEdit}
          />
        )}
      </div>
    </>
  );
};

export default Note;
