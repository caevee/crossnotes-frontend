import React, { useEffect, useState } from "react";
import Note from "./Note";
import axios from "axios";

const Notelist = () => {
  const [test, setTest] = useState("Test");
  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://localhost:3001/notes");

      setTest(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <button>Refresh</button>
      <h1>{test}</h1>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default Notelist;
