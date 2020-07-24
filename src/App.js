import React, { useState, useEffect } from "react";
import Notelist from "./components/Notelist";
import Axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/notes")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Notelist />
      <p>{notes}</p>
    </div>
  );
}

export default App;
