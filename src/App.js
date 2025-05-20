import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./Navbar/Navbar";
import ImageSlider from "./Slider/Slider";
import SliderContainer from "./SliderContainer/SliderContainer";
import StoreItems from "./StoreItems/StoreItems";
import StoreSlider from "./StoreSlider/StoreSlider";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <SliderContainer>
        <ImageSlider></ImageSlider>
      </SliderContainer>
      <StoreSlider>
        <StoreItems></StoreItems>
        <StoreItems></StoreItems>
        <StoreItems></StoreItems>
        <StoreItems></StoreItems>
        <StoreItems></StoreItems>
        <StoreItems></StoreItems>
        <StoreItems></StoreItems>
      </StoreSlider>
    </div>
  );
}

export default App;
