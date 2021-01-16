import React, { useEffect, useState } from "react";
import "../style.css";
import Mouse from "./Mouse";
import axios from "axios";
import Slider from "./Slider";
import { Loader } from "./Loader";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [url, setUrl] = useState("https://207.154.219.175:8000/");
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setIsLoading(true);

      try {
        const response = await axios(url);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      {isLoading ? (
        <div className="loaderr">
          <Loader />
        </div>
      ) : (
        <div>
          <Slider slides={data} />
          <Mouse />
        </div>
      )}
    </div>
  );
}

export default Home;
