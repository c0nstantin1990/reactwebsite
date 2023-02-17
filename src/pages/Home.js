import React, { useState, useEffect } from "react";

const Home = () => {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("render");
  }, [resourceType]);

  return (
    <div className="container">
      <h1>Home</h1>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h2>{resourceType}</h2>
    </div>
  );
};

export default Home;
