import React, { useState, useEffect } from "react";
import axios from "axios";
import AddNote from "./AddNote";
import Notelist from "./Notelist";

const Content = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    axios
      .get("https://crossnotes-api.herokuapp.com/notes")
      .then(function (response) {
        let data = [];
        response.data.map((item) => {
          return data.push(item);
        });
        setNotes(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <>
      <div className="container">
        <h1 style={{ color: "#E8C6BA" }}>Notizen</h1>
        <Notelist notes={notes} setNotes={setNotes} fetchNotes={fetchNotes} />
        <AddNote fetchNotes={fetchNotes} />
      </div>
    </>
  );
};

export default Content;
