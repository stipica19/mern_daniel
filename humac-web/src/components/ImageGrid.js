import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../style.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const ImageGrid = ({ setSelectedImg }) => {
  const [skip, setSkip] = useState(0);
  const [category, setCategory] = useState("");
  const url = useParams();
  const [images, setImage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (count = 10) => {
    axios
      .get(`https://tiskara-humac.com/api/galerija/${url.cat}?skip=${skip}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.length === 0) {
          console.log("usli");
          setLoading(!loading);
        }
        setSkip(skip + 3);
        setCategory(res.data[0].category);
        setImage([...images, ...res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <h1>GALERIJA/ {category} </h1>
          </div>
        </div>

        <InfiniteScroll
          dataLength={images.length}
          next={fetchTodos}
          style={{ display: "flex", flexDirection: "column-reverse" }}
          hasMore={true}
          scrollableTarget="scrollableDiv"
        >
          {" "}
          <div className="row">
            <div className="portfolio-gallery">
              {images &&
                images.map((image) => (
                  <motion.div
                    className="item"
                    key={image._id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() =>
                      setSelectedImg(
                        `https://tiskara-humac.com/api/${image.images}`
                      )
                    }
                  >
                    <motion.img
                      src={`https://tiskara-humac.com/api/${image.images}`}
                      alt="uploaded pic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    />
                  </motion.div>
                ))}
              {loading ? <Loader /> : ""}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ImageGrid;
