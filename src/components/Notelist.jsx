import React from "react";
import Note from "./Note";

const Notelist = ({ notes, setNotes, fetchNotes }) => {
  return (
    <div>
      {notes.map((item) => {
        return (
          <>
            <Note
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              setNotes={setNotes}
              fetchNotes={fetchNotes}
            />
          </>
        );
      })}
    </div>
  );
};

export default Notelist;
