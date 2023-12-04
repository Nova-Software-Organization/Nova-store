import { useEffect, useState } from "react";
import { BsArrowUpCircleFill } from 'react-icons/bs';

export default function BackToTop () {
  const [backToTopButton, setbackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollThreshold = windowHeight / 2;

      if (scrollY > scrollThreshold) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="flex justify-end mb-10 px-3 fixed bottom-0 right-0 mt-4">
        {backToTopButton && (
          <button onClick={scroll} className="animate-bounce relative rounded-full p-4 px-6 mt-4 border-none font-bold">
            <BsArrowUpCircleFill size={62} className="text-orange-600"/>
          </button>
        )}
      </div>
    </>
  );
};
