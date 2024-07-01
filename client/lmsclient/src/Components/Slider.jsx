import { useEffect, useState } from "react";
import picture from "./asset/wepik-export-20240318055858DhWO 2.png";
import "./slider.css";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const quotes = [
    "Effortless learning, organized management. Welcome to our LMS!",
    "A place where education meets innovation. Welcome aboard!",
    "Your gateway to efficient and effective learning. Step inside!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % quotes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex justify-center items-center  flex flex-col ">
      <div className="h-[980] w[710] bg-[#4DBBA8]  my-[60px] mx-[60px] bg-opacity-30  border-2 border-white rounded-lg">
        {/* Slider with quotes */}
        <div className=" my-[50px] mx-[60px] text-[44px]  h-[230px] quote-text ">
          <p>&quot;{quotes[currentSlide]}&quot; </p>
        </div>

        <div className="flex flex-row ">
          <div className=" mt-[728px] flex flex-row  gap-[8px]   ">
            <div className="quotes-dots">
              {" "}
              {quotes.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                ></div>
              ))}
            </div>
          </div>
          {/* Image below the slider */}
          <div className=" flex-1 flex justify-center items-center  ">
            <img
              src={picture}
              alt="Slider"
              className=" pt-[100px]  w-[587px] h-[877px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
