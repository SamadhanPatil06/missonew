"use client";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const MissoCelebration = () => {
  const [show, setShow] = useState(true);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize(); // first time
    window.addEventListener("resize", updateSize);

    const timer = setTimeout(() => setShow(false), 5000);

    return () => {
      window.removeEventListener("resize", updateSize);
      clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={400}
      recycle={false}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    />
  );
};

export default MissoCelebration;
