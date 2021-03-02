import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const useSlider = (slideImage, slideText, images) => {
  let slideCounter = 0;
  const id = useLocation();
  const [isLoading, setisLoading] = useState(false);
  const slideText = "HELOO";
  useEffect(() => {
    if (images === undefined) {
      setisLoading(false);
    } else {
      setisLoading(true);
    }
    if (isLoading) {
      startSlider();
    }
  });

  const startSlider = () => {
    slideImage.current.style.backgroundImage = `url(${require("../images/" +
      images[0]?.images)})`;
  };

  const handleSlide = (slide) => {
    slideImage.current.style.backgroundImage = `linear-gradient(
            to right,
            rgba(34, 34, 34, 0.4),
            rgba(68, 68, 68, 0.4)
          ),   url(${require("../images/" + images[slide - 1]?.images)})`;
    slideText.current.innerHTML = images[slide - 1]?.text;
    animateSlide(slideImage);
  };

  const animateSlide = () => {
    slideImage.current.classList.add("fadeIn");
    setTimeout(() => {
      slideImage.current.classList.remove("fadeIn");
    }, 700);
  };

  const goToPreviousSlide = () => {
    if (slideCounter === 0) {
      handleSlide(images.length);
      slideCounter = images.length;
    }

    handleSlide(slideCounter);
    slideCounter--;
  };

  const goToNextSlide = () => {
    //console.log("klik1");
    if (slideCounter === images.length - 1) {
      //  console.log("Slider Counder : " + slideCounter);
      startSlider();
      slideCounter = -1;

      animateSlide(slideImage);
    }

    if (id.pathname === "/") {
      slideImage.current.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
      ), url(${require("../images/" + images[slideCounter + 1]?.images)})`;
      console.log("SLide counter 2 :" + slideCounter);
      slideCounter++;
      console.log("SLide counter 2-1 :" + slideCounter);
      animateSlide(slideImage);
    }
  };

  return { goToPreviousSlide, goToNextSlide };
};

export default useSlider;
