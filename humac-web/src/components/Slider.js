import React, { useEffect, useState } from "react";
import "../style.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [isLoading, setisLoading] = useState(false);

  const goToNext = () => {
    nextSlide();
    setTimeout(nextSlide, 3000);
    return () => goToNext();
  };

  useEffect(() => {
    if (slides === undefined) {
      setisLoading(false);
    } else {
      setisLoading(true);
    }

    const timeout = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => clearTimeout(timeout);
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  //url(${require(`../img/${images[0]}`)})`;
  return (
    <section className="slider">
      <div className="slider--content">
        <div
          className="block"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <h1 data-aos="fade-in" data-aos-duration="800" data-aos-delay="300">
            GRAFIČKI STUDIO
          </h1>
          <h6 data-aos="fade-in" data-aos-duration="800" data-aos-delay="300">
            TISKARA HUMAC
          </h6>
          <div
            className="cv-btn"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <a href="#contact-us">KONTAKT</a>
          </div>
        </div>
        <ChevronLeftRoundedIcon className="left-arrow" onClick={prevSlide} />
        <ChevronRightIcon className="right-arrow" onClick={nextSlide} />

        {isLoading &&
          slides.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    src={`https://tiskara-humac.com/api/${slide?.images}`}
                    alt="humac image"
                    className="imagee"
                  />
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Slider;
