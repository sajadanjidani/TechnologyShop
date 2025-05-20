import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./Navbar/Navbar";
import ImageSlider from "./Slider/Slider";
import SliderContainer from "./SliderContainer/SliderContainer";
import StoreItems from "./StoreItems/StoreItems";
import StoreSlider from "./StoreSlider/StoreSlider";

function App() {

  // db 

  const StoreSliderInfo = [
    {id: 1, title: 'جدیدترین محصولات'},
    {id: 2, title: 'محبوب ترین محصولات'},
    {id: 3, title: 'ارزون ترین محصولات'},
  ]

  const computerItems = [
    {id: 1, title: 'کیس RGB Glass 2020', srcImage: '/image/pc item/pc-item-1.png', price: '20.000.000', rate: 3.5},
    {id: 2, title: 'کیس Iron Class 2020', srcImage: '/image/pc item/pc-item-2.png', price: '15.000.000', rate: 3},
    {id: 3, title: 'کیس Full RGB 2025', srcImage: '/image/pc item/pc-item-3.png', price: '25.000.000', rate: 4.5},
    {id: 4, title: 'کیس Full RGB 2021', srcImage: '/image/pc item/pc-item-4.png', price: '23.000.000', rate: 4},
    {id: 5, title: 'کیس Full RGB 2022', srcImage: '/image/pc item/pc-item-5.png', price: '25.000.000', rate: 4.5},
    {id: 6, title: 'کیس RGB Glass 2019', srcImage: '/image/pc item/pc-item-6.png', price: '21.000.000', rate: 3.7},
    {id: 7, title: 'کیس Full RGB Glass 2024', srcImage: '/image/pc item/pc-item-7.png', price: '25.000.000', rate: 4.7},
    {id: 8, title: 'کیس Iron Class 2021', srcImage: '/image/pc item/pc-item-8.png', price: '15.000.000', rate: 3.9},
    {id: 9, title: 'کیس RGB Glass 2023', srcImage: '/image/pc item/pc-item-9.png', price: '17.000.000', rate: 4.2},
    {id: 10, title: 'کیس RGB Glass 2020', srcImage: '/image/pc item/pc-item-10.png', price: '19.000.000', rate: 4},
    {id: 11, title: 'کیس X Modle', srcImage: '/image/pc item/pc-item-11.png', price: '22.000.000', rate: 4.2},
    {id: 12, title: 'کیس Snack Modle', srcImage: '/image/pc item/pc-item-12.png', price: '22.000.000', rate: 4.3},
  ]

  const phoneItems = [
    {id: 1, title: 'گوشی SAMSUNG A55 5G', srcImage: '/image/mobile item/mobile-item-1.png', price: '30.000.000', rate: 4.5},
    {id: 2, title: 'گوشی IPhone16 CH 128GB', srcImage: '/image/mobile item/mobile-item-2.png', price: '70.000.000', rate: 5},
    {id: 3, title: 'گوشی SAMSUNG A35', srcImage: '/image/mobile item/mobile-item-3.png', price: '20.000.000', rate: 4},
    {id: 4, title: 'گوشی SAMSUNG A51', srcImage: '/image/mobile item/mobile-item-3.png', price: '25.000.000', rate: 4.2},
    {id: 5, title: 'گوشی SAMSUNG A12 5G', srcImage: '/image/mobile item/mobile-item-4.png', price: '15.000.000', rate: 3.6},
    {id: 6, title: 'گوشی IPhone12 CH 128GB', srcImage: '/image/mobile item/mobile-item-5.png', price: '50.000.000', rate: 4.7},
    {id: 7, title: 'گوشی SAMSUNG A16 5G', srcImage: '/image/mobile item/mobile-item-6.png', price: '16.000.000', rate: 3},
    {id: 8, title: 'گوشی SAMSUNG A14', srcImage: '/image/mobile item/mobile-item-7.png', price: '12.000.000', rate: 2.7},
    {id: 9, title: 'گوشی Redmi 256GB', srcImage: '/image/mobile item/mobile-item-8.png', price: '22.000.000', rate: 3.8},
    {id: 10, title: 'گوشی Poco 512GB', srcImage: '/image/mobile item/mobile-item-9.png', price: '24.000.000', rate: 4.3},
    {id: 11, title: 'گوشی Redmi 512GB', srcImage: '/image/mobile item/mobile-item-10.png', price: '27.000.000', rate: 4.6},
    {id: 12, title: 'گوشی SAMSUNG A71', srcImage: '/image/mobile item/mobile-item-11.png', price: '32.000.000', rate: 4.5},
    {id: 13, title: 'گوشی Redmi 12', srcImage: '/image/mobile item/mobile-item-12.png', price: '17.000.000', rate: 4},
  ]

  const consoleItems = [
    {id: 1, title: 'کنسول بازی PS5 + دو دسته + مولتی شارژر', srcImage: '/image/console item/console-item-1.png', price: '50.000.000', rate: 5},
    {id: 2, title: 'کنسول بازی PS4 کاستوم شده', srcImage: '/image/console item/console-item-2.png', price: '23.000.000', rate: 4},
    {id: 3, title: 'کنسول بازی PS5 Pro', srcImage: '/image/console item/console-item-3.png', price: '67.000.000', rate: 4.7},
    {id: 4, title: 'کنسول بازی PS4 Black', srcImage: '/image/console item/console-item-4.png', price: '19.000.000', rate: 3.6},
    {id: 5, title: 'کنسول بازی XBOX 2024 Black', srcImage: '/image/console item/console-item-5.png', price: '40.000.000', rate: 4.3},
    {id: 6, title: 'کنسول بازی NINTENDO Black', srcImage: '/image/console item/console-item-6.png', price: '10.000.000', rate: 3},
    {id: 7, title: 'کنسول بازی PS5 HandGame', srcImage: '/image/console item/console-item-7.png', price: '15.000.000', rate: 3.7},
    {id: 8, title: 'کنسول بازی NINTENDO RED BLUE', srcImage: '/image/console item/console-item-8.png', price: '13.000.000', rate: 4},
    {id: 9, title: 'کنسول بازی قدیمی مینیمال', srcImage: '/image/console item/console-item-9.png', price: '10.000.000', rate: 3},
    {id: 10, title: 'کنسول بازی XBOX 2025', srcImage: '/image/console item/console-item-10.png', price: '48.000.000', rate: 5},
    {id: 11, title: 'کنسول بازی قدیمی SUP', srcImage: '/image/console item/console-item-11.png', price: '5.0000.000', rate: 3.4},
    {id: 12, title: 'کنسول بازی قدیمی ZFOLD', srcImage: '/image/console item/console-item-12.png', price: '8.000.000', rate: 3.5},
  ]

  const laptopItems = [
    {id: 1, title: 'لپتاپ Lenovo i5', srcImage: '/image/laptop item/laptop-item-1.png', price: '35.000.000', rate: 3.7},
    {id: 2, title: 'لپتاپ Lenovo i3', srcImage: '/image/laptop item/laptop-item-2.png', price: '30.000.000', rate: 3.2},
    {id: 3, title: 'لپتاپ Lenovo Gaming 3', srcImage: '/image/laptop item/laptop-item-3.png', price: '37.000.000', rate: 4.2},
    {id: 4, title: 'لپتاپ TUF Gaming 3', srcImage: '/image/laptop item/laptop-item-4.png', price: '40.000.000', rate: 4.7},
    {id: 5, title: 'لپتاپ Macbock 4', srcImage: '/image/laptop item/laptop-item-5.png', price: '50.000.000', rate: 4.5},
    {id: 6, title: 'لپتاپ Macbock 3', srcImage: '/image/laptop item/laptop-item-6.png', price: '44.000.000', rate: 4.1},
    {id: 7, title: 'لپتاپ Lenovo Gaming 4', srcImage: '/image/laptop item/laptop-item-7.png', price: '40.000.000', rate: 4.8},
    {id: 8, title: 'لپتاپ TUF Gaming 7', srcImage: '/image/laptop item/laptop-item-8.png', price: '90.000.000', rate: 5},
    {id: 9, title: 'لپتاپ Lenovo i7', srcImage: '/image/laptop item/laptop-item-9.png', price: '43.000.000', rate: 4.9},
    {id: 10, title: 'لپتاپ SAMSUNG', srcImage: '/image/laptop item/laptop-item-10.png', price: '30.000.000', rate: 3.6},
  ]

  return (
    <div className="container">
      <Navbar></Navbar>
      <SliderContainer>
        <ImageSlider></ImageSlider>
      </SliderContainer>
      {/* new item */}
      <StoreSlider {...StoreSliderInfo[0]}>
        <StoreItems {...consoleItems[0]}></StoreItems>
        <StoreItems {...computerItems[2]}></StoreItems>
        <StoreItems {...phoneItems[1]}></StoreItems>
        <StoreItems {...laptopItems[7]}></StoreItems>
        <StoreItems {...computerItems[6]}></StoreItems>
        <StoreItems {...phoneItems[5]}></StoreItems>
        <StoreItems {...consoleItems[4]}></StoreItems>
        <StoreItems {...phoneItems[8]}></StoreItems>
        <StoreItems {...consoleItems[3]}></StoreItems>
        <StoreItems {...consoleItems[9]}></StoreItems>
        <StoreItems {...laptopItems[8]}></StoreItems>
        <StoreItems {...computerItems[8]}></StoreItems>
      </StoreSlider>
      {/* top rate */}
      <StoreSlider {...StoreSliderInfo[1]}>
        <StoreItems {...computerItems[2]}></StoreItems>
        <StoreItems {...laptopItems[7]}></StoreItems>
        <StoreItems {...computerItems[6]}></StoreItems>
        <StoreItems {...phoneItems[0]}></StoreItems>
        <StoreItems {...consoleItems[0]}></StoreItems>
        <StoreItems {...computerItems[4]}></StoreItems>
        <StoreItems {...phoneItems[4]}></StoreItems>
        <StoreItems {...consoleItems[2]}></StoreItems>
        <StoreItems {...phoneItems[9]}></StoreItems>
        <StoreItems {...consoleItems[6]}></StoreItems>
        <StoreItems {...phoneItems[10]}></StoreItems>
        <StoreItems {...consoleItems[9]}></StoreItems>
      </StoreSlider>
      {/* low price */}
      <StoreSlider {...StoreSliderInfo[2]}>
        <StoreItems {...consoleItems[10]}></StoreItems>
        <StoreItems {...phoneItems[12]}></StoreItems>
        <StoreItems {...computerItems[1]}></StoreItems>
        <StoreItems {...phoneItems[4]}></StoreItems>
        <StoreItems {...consoleItems[5]}></StoreItems>
        <StoreItems {...computerItems[7]}></StoreItems>
        <StoreItems {...phoneItems[6]}></StoreItems>
        <StoreItems {...consoleItems[7]}></StoreItems>
        <StoreItems {...computerItems[8]}></StoreItems>
        <StoreItems {...consoleItems[11]}></StoreItems>
        <StoreItems {...phoneItems[9]}></StoreItems>
        <StoreItems {...consoleItems[8]}></StoreItems>
        <StoreItems></StoreItems>
      </StoreSlider>
    </div>
  );
}

export default App;
