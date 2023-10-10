import { useState } from "react";
import { useEffect } from "react";
import Albums from "./Albums";

const FetchingData = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const tarea = fetch("https://jsonplaceholder.typicode.com/albums");

    tarea
      .then((res) => res.json())
      .then((res) => setAlbums(res))
      .catch((err) => console.log(err));
  }, []);

  console.log({ albums });

  return <Albums albums={albums} />;
};

export default FetchingData;
