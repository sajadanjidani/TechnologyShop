import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./Navbar/Navbar";
import ImageSlider from "./Slider/Slider";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <ImageSlider></ImageSlider>
    </div>
  );
}

export default App;
