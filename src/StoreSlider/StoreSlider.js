import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const StoreSlider = ({ children, title }) => {
  const sliderRef = useRef();
  const [scrollWidth, setScrollWidth] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setScrollWidth(sliderRef.current.scrollWidth);
      setClientWidth(sliderRef.current.clientWidth);
    }
  }, [children]);

  return (
    <div className="w-full h-auto p-5 mt-14 dark:text-textDark">
      <h2 className="text-xl">{title}</h2>
      <motion.div ref={sliderRef} className="overflow-hidden mt-5 cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: scrollWidth - clientWidth }}
          className="flex gap-3"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StoreSlider;
