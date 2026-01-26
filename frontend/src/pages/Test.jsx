import { useEffect, useState } from "react";

const Test = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return <h2>{msg}</h2>;
};

export default Test;