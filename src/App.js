import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./Navbar/Navbar";
import ImageSlider from "./Slider/Slider";
import SliderContainer from "./SliderContainer/SliderContainer";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <SliderContainer>
        <ImageSlider></ImageSlider>
      </SliderContainer>
    </div>
  );
}

export default App;
