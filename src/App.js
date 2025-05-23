import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./Navbar/Navbar";
import ImageSlider from "./Slider/Slider";
import SliderContainer from "./SliderContainer/SliderContainer";
import StoreItems from "./StoreItems/StoreItems";
import StoreSlider from "./StoreSlider/StoreSlider";
import ServicesWe from "./ServicesWe/ServicesWe";
import ServicesItem from "./ServicesItem/ServicesItem";
import WeblogContainer from "./WeblogContainer/WeblogContainer";
import WeblogItem from "./WeblogItem/WeblogItem";
import Footer from "./Footer/Footer";

function App() {

  // db 

  const StoreSliderInfo = [
    {id: 1, title: 'جدیدترین محصولات'},
    {id: 2, title: 'محبوب ترین محصولات'},
    {id: 3, title: 'ارزون ترین محصولات'},
  ]

  const computerItems = [
    {id: 1, title: 'کیس RGB Glass 2020', srcImage: './image/pc item/pc-item-1.png', price: '20.000.000', rate: 3.5},
    {id: 2, title: 'کیس Iron Class 2020', srcImage: './image/pc item/pc-item-2.png', price: '15.000.000', rate: 3},
    {id: 3, title: 'کیس Full RGB 2025', srcImage: './image/pc item/pc-item-3.png', price: '25.000.000', rate: 4.5},
    {id: 4, title: 'کیس Full RGB 2021', srcImage: './image/pc item/pc-item-4.png', price: '23.000.000', rate: 4},
    {id: 5, title: 'کیس Full RGB 2022', srcImage: './image/pc item/pc-item-5.png', price: '25.000.000', rate: 4.5},
    {id: 6, title: 'کیس RGB Glass 2019', srcImage: './image/pc item/pc-item-6.png', price: '21.000.000', rate: 3.7},
    {id: 7, title: 'کیس Full RGB Glass 2024', srcImage: './image/pc item/pc-item-7.png', price: '25.000.000', rate: 4.7},
    {id: 8, title: 'کیس Iron Class 2021', srcImage: './image/pc item/pc-item-8.png', price: '15.000.000', rate: 3.9},
    {id: 9, title: 'کیس RGB Glass 2023', srcImage: './image/pc item/pc-item-9.png', price: '17.000.000', rate: 4.2},
    {id: 10, title: 'کیس RGB Glass 2020', srcImage: './image/pc item/pc-item-10.png', price: '19.000.000', rate: 4},
    {id: 11, title: 'کیس X Modle', srcImage: './image/pc item/pc-item-11.png', price: '22.000.000', rate: 4.2},
    {id: 12, title: 'کیس Snack Modle', srcImage: './image/pc item/pc-item-12.png', price: '22.000.000', rate: 4.3},
  ]

  const phoneItems = [
    {id: 1, title: 'گوشی SAMSUNG A55 5G', srcImage: './image/mobile item/mobile-item-1.png', price: '30.000.000', rate: 4.5},
    {id: 2, title: 'گوشی IPhone16 CH 128GB', srcImage: './image/mobile item/mobile-item-2.png', price: '70.000.000', rate: 5},
    {id: 3, title: 'گوشی SAMSUNG A35', srcImage: './image/mobile item/mobile-item-3.png', price: '20.000.000', rate: 4},
    {id: 4, title: 'گوشی SAMSUNG A51', srcImage: './image/mobile item/mobile-item-3.png', price: '25.000.000', rate: 4.2},
    {id: 5, title: 'گوشی SAMSUNG A12 5G', srcImage: './image/mobile item/mobile-item-4.png', price: '15.000.000', rate: 3.6},
    {id: 6, title: 'گوشی IPhone12 CH 128GB', srcImage: './image/mobile item/mobile-item-5.png', price: '50.000.000', rate: 4.7},
    {id: 7, title: 'گوشی SAMSUNG A16 5G', srcImage: './image/mobile item/mobile-item-6.png', price: '16.000.000', rate: 3},
    {id: 8, title: 'گوشی SAMSUNG A14', srcImage: './image/mobile item/mobile-item-7.png', price: '12.000.000', rate: 2.7},
    {id: 9, title: 'گوشی Redmi 256GB', srcImage: './image/mobile item/mobile-item-8.png', price: '22.000.000', rate: 3.8},
    {id: 10, title: 'گوشی Poco 512GB', srcImage: './image/mobile item/mobile-item-9.png', price: '24.000.000', rate: 4.3},
    {id: 11, title: 'گوشی Redmi 512GB', srcImage: './image/mobile item/mobile-item-10.png', price: '27.000.000', rate: 4.6},
    {id: 12, title: 'گوشی SAMSUNG A71', srcImage: './image/mobile item/mobile-item-11.png', price: '32.000.000', rate: 4.5},
    {id: 13, title: 'گوشی Redmi 12', srcImage: './image/mobile item/mobile-item-12.png', price: '17.000.000', rate: 4},
  ]

  const consoleItems = [
    {id: 1, title: 'کنسول بازی PS5 + دو دسته + مولتی شارژر', srcImage: './image/console item/console-item-1.png', price: '50.000.000', rate: 5},
    {id: 2, title: 'کنسول بازی PS4 کاستوم شده', srcImage: './image/console item/console-item-2.png', price: '23.000.000', rate: 4},
    {id: 3, title: 'کنسول بازی PS5 Pro', srcImage: './image/console item/console-item-3.png', price: '67.000.000', rate: 4.7},
    {id: 4, title: 'کنسول بازی PS4 Black', srcImage: './image/console item/console-item-4.png', price: '19.000.000', rate: 3.6},
    {id: 5, title: 'کنسول بازی XBOX 2024 Black', srcImage: './image/console item/console-item-5.png', price: '40.000.000', rate: 4.3},
    {id: 6, title: 'کنسول بازی NINTENDO Black', srcImage: './image/console item/console-item-6.png', price: '10.000.000', rate: 3},
    {id: 7, title: 'کنسول بازی PS5 HandGame', srcImage: './image/console item/console-item-7.png', price: '15.000.000', rate: 3.7},
    {id: 8, title: 'کنسول بازی NINTENDO RED BLUE', srcImage: './image/console item/console-item-8.png', price: '13.000.000', rate: 4},
    {id: 9, title: 'کنسول بازی قدیمی مینیمال', srcImage: './image/console item/console-item-9.png', price: '10.000.000', rate: 3},
    {id: 10, title: 'کنسول بازی XBOX 2025', srcImage: './image/console item/console-item-10.png', price: '48.000.000', rate: 5},
    {id: 11, title: 'کنسول بازی قدیمی SUP', srcImage: './image/console item/console-item-11.png', price: '5.0000.000', rate: 3.4},
    {id: 12, title: 'کنسول بازی قدیمی ZFOLD', srcImage: './image/console item/console-item-12.png', price: '8.000.000', rate: 3.5},
  ]

  const laptopItems = [
    {id: 1, title: 'لپتاپ Lenovo i5', srcImage: './image/laptop item/laptop-item-1.png', price: '35.000.000', rate: 3.7},
    {id: 2, title: 'لپتاپ Lenovo i3', srcImage: './image/laptop item/laptop-item-2.png', price: '30.000.000', rate: 3.2},
    {id: 3, title: 'لپتاپ Lenovo Gaming 3', srcImage: './image/laptop item/laptop-item-3.png', price: '37.000.000', rate: 4.2},
    {id: 4, title: 'لپتاپ TUF Gaming 3', srcImage: './image/laptop item/laptop-item-4.png', price: '40.000.000', rate: 4.7},
    {id: 5, title: 'لپتاپ Macbock 4', srcImage: './image/laptop item/laptop-item-5.png', price: '50.000.000', rate: 4.5},
    {id: 6, title: 'لپتاپ Macbock 3', srcImage: './image/laptop item/laptop-item-6.png', price: '44.000.000', rate: 4.1},
    {id: 7, title: 'لپتاپ Lenovo Gaming 4', srcImage: './image/laptop item/laptop-item-7.png', price: '40.000.000', rate: 4.8},
    {id: 8, title: 'لپتاپ TUF Gaming 7', srcImage: './image/laptop item/laptop-item-8.png', price: '90.000.000', rate: 5},
    {id: 9, title: 'لپتاپ Lenovo i7', srcImage: './image/laptop item/laptop-item-9.png', price: '43.000.000', rate: 4.9},
    {id: 10, title: 'لپتاپ SAMSUNG', srcImage: './image/laptop item/laptop-item-10.png', price: '30.000.000', rate: 3.6},
  ]

  const servicesItemInfo = [
    {id: 1, title: 'گارانتی', content: 'تمام کالاها دارای گارانتی هستند .', iconColor: '#0078d4', iconBgColor: '#b1ebff'},
    {id: 2, title: 'پشتیبانی فعال', content: 'ما از پشتیبانی 24 ساعته برخوردار میکنیم .', iconColor: '#5c0099', iconBgColor: '#e4c7ff'},
    {id: 3, title: 'تضمین قیمت', content: 'ما به شما تضمین بهترین قیمت در سراسر کشور را میدهیم .', iconColor: '#00796b', iconBgColor: '#a2e3d3  '},
    {id: 4, title: 'تضمین کیفیت', content: 'ما به شما تضمین بهترین کیفیت در سراسر کشور را میدهیم .', iconColor: '#e65c00 ', iconBgColor: '#ffcd8c'},
  ]

  const WeblogItemInfo = [
    {id: 1, title: 'جشن سی سالگی پلیسیشن', content: 'پلیسیشن شرکت سازنده مجموعه کنسول های بازی از PS1 تا PS5 به مناسبت سی سالگی', writer: 'سجاد انجیدنی', date: '1403/02/29', srcImage: './image/weblog/weblog-item-1.jpg'},
    {id: 2, title: 'قرارداد تیم اروپایی با اپل', content: 'طبق بیانیه رسمی real madrid با شرکت اپل قرار دادی مبتنی بر تجربه تماشاگر حاضر در استادیو به کمک VR را ایجاد کرده اند ', writer: 'سجاد انجیدنی', date: '1403/02/28', srcImage: './image/weblog/weblog-item-4.jpg'},
    {id: 3, title: 'دسته های جدید ایکس باکس', content: 'ایکس باکس برای بازی کال اف دیوتی وارزون دسته های مخصوص آن بازی را ایجاد و در بسته های جدید خود به علاوه بر دسته های مخصوص کاور XBOX کاستوم اضافه شد', writer: 'سجاد انجیدنی', date: '1403/02/30', srcImage: './image/weblog/weblog-item-2.jpg'},
    {id: 4, title: 'بهترین بازی های امسال ', content: 'بهترین بازی های امسال و لیست سیستم های که آنها را اجرا میکنند منتشر شد', writer: 'سجاد انجیدنی', date: '1403/02/31', srcImage: './image/weblog/weblog-item-3.jpg'},
  ]

  return (
    <div className="container overflow-x-hidden dark:bg-bgDark">
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
        <StoreItems {...consoleItems[3]}></StoreItems>
      </StoreSlider>
      {/* Services container */}
      <ServicesWe>
        <ServicesItem {...servicesItemInfo[0]}>
          <svg width="50px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M576.213333 149.973333a91.221333 91.221333 0 0 1 100.992 31.957334 208.981333 208.981333 0 0 0 104.533334 74.837333 87.082667 87.082667 0 0 1 61.482666 82.432c0 44.117333 14.208 86.954667 40.32 122.368a84.565333 84.565333 0 0 1 0 100.906667 205.994667 205.994667 0 0 0-40.32 122.368 87.04 87.04 0 0 1-61.525333 82.389333 208.938667 208.938667 0 0 0-104.533333 74.837333 91.264 91.264 0 0 1-100.992 32 210.816 210.816 0 0 0-128.426667 0 91.178667 91.178667 0 0 1-100.949333-32 208.981333 208.981333 0 0 0-104.533334-74.837333 87.04 87.04 0 0 1-61.482666-82.432 206.08 206.08 0 0 0-40.32-122.368 84.565333 84.565333 0 0 1 0-100.906667c26.112-35.413333 40.32-78.250667 40.32-122.368 0-36.650667 24.064-70.4 61.525333-82.389333a208.981333 208.981333 0 0 0 104.533333-74.837333 91.264 91.264 0 0 1 100.992-32 210.816 210.816 0 0 0 128.426667 0z m-18.048-57.429333a151.594667 151.594667 0 0 1-92.288 0A150.698667 150.698667 0 0 0 298.88 145.92a149.248 149.248 0 0 1-74.666667 53.376A147.2 147.2 0 0 0 121.045333 339.2a145.493333 145.493333 0 0 1-28.501333 86.4 145.194667 145.194667 0 0 0 0 172.842667 145.493333 145.493333 0 0 1 28.501333 86.4c0 63.701333 41.642667 120.149333 103.168 139.818666a149.205333 149.205333 0 0 1 74.666667 53.418667 150.613333 150.613333 0 0 0 166.954667 53.418667 151.552 151.552 0 0 1 92.288 0 150.698667 150.698667 0 0 0 166.997333-53.418667 149.248 149.248 0 0 1 74.666667-53.376 147.242667 147.242667 0 0 0 103.168-139.818667c0-31.018667 9.984-61.269333 28.501333-86.4a145.194667 145.194667 0 0 0 0-172.842666 145.493333 145.493333 0 0 1-28.501333-86.4 147.242667 147.242667 0 0 0-103.168-139.818667 149.248 149.248 0 0 1-74.666667-53.418667 150.613333 150.613333 0 0 0-166.954667-53.418666z m149.248 345.6a30.421333 30.421333 0 0 0-0.170666-42.709333 29.653333 29.653333 0 0 0-42.24-0.170667l-205.525334 207.786667-90.709333-91.690667a29.653333 29.653333 0 0 0-42.24-0.170667 30.421333 30.421333 0 0 0 0.170667 42.709334L424.448 652.8a49.408 49.408 0 0 0 70.4 0.256l212.565333-214.869333z"  /></svg>
        </ServicesItem>
        <ServicesItem {...servicesItemInfo[1]}>
          <svg width="50px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M599.2916 517.900384 203.043904 517.900384c-14.145162 0-25.611308 11.466146-25.611308 25.611308s11.467169 25.611308 25.611308 25.611308l396.247696 0c14.145162 0 25.611308-11.466146 25.611308-25.611308S613.436762 517.900384 599.2916 517.900384zM715.832873 284.812721l-512.788969 0c-14.145162 0-25.611308 11.467169-25.611308 25.611308s11.467169 25.611308 25.611308 25.611308l512.788969 0c14.145162 0 25.611308-11.467169 25.611308-25.611308S729.979058 284.812721 715.832873 284.812721zM715.832873 401.356041l-512.788969 0c-14.145162 0-25.611308 11.467169-25.611308 25.611308s11.467169 25.611308 25.611308 25.611308l512.788969 0c14.145162 0 25.611308-11.467169 25.611308-25.611308S729.979058 401.356041 715.832873 401.356041zM846.280878 521.773598c0.031722-0.521886 0.053212-1.045819 0.053212-1.575892l0-293.914006c0-38.415938-31.251771-69.668733-69.666686-69.668733L142.211421 156.614967c-38.415938 0-69.668733 31.252795-69.668733 69.668733l0 401.369344c0 38.414915 31.252795 69.667709 69.668733 69.667709l110.010533 0c10.17064 0 18.445094 8.274454 18.445094 18.444071l0 151.48411 193.053877-165.484985c3.344165-2.866281 7.611352-4.444219 12.015661-4.444219l193.474456 0c2.753717 0 5.40408-0.440022 7.890714-1.24434 16.888645 58.233286 70.706365 100.92869 134.314055 100.92869 77.090772 0 139.809209-62.721507 139.809209-139.817396C951.225021 592.126922 906.557706 537.304316 846.280878 521.773598zM672.018995 646.252657c-0.921999-0.100284-1.858324-0.155543-2.807952-0.155543L475.736587 646.097114c-16.619516 0-32.724309 5.954619-45.348837 16.773012l-108.497063 93.004207L321.890686 715.764823c0-38.414915-31.253818-69.667709-69.668733-69.667709L142.211421 646.097114c-10.17064 0-18.445094-8.274454-18.445094-18.444071L123.766326 226.2837c0-10.17064 8.274454-18.445094 18.445094-18.445094l634.455983 0c10.169617 0 18.443048 8.274454 18.443048 18.445094L795.110451 518.328126C729.236138 526.014178 677.194878 579.658959 672.018995 646.252657zM811.415812 745.781464c-48.853661 0-88.598874-39.743166-88.598874-88.593757 0-48.849568 39.745213-88.591711 88.598874-88.591711 48.845475 0 88.585571 39.742143 88.585571 88.591711C900.001383 706.038298 860.261287 745.781464 811.415812 745.781464zM838.154803 607.02319l-42.680055 52.515051-15.21247-18.029632c-9.121751-10.809183-25.279756-12.178367-36.09201-3.057639-10.810207 9.121751-12.17939 25.28078-3.057639 36.09201l55.101969 65.303308 81.691557-100.517321c8.921183-10.977006 7.255241-27.107381-3.722788-36.028565C863.207385 594.380242 847.075986 596.044138 838.154803 607.02319z"  /></svg>
        </ServicesItem>
        <ServicesItem {...servicesItemInfo[2]}>
          <svg width="50px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M348.027854 342.7457m-286.301845 0a286.301845 286.301845 0 1 0 572.60369 0 286.301845 286.301845 0 1 0-572.60369 0Z" className="fill-white dark:fill-black" /><path d="M1024.000919 788.591388c0-0.626481 0-1.252962-0.208827-1.879443 0-0.626481-0.208827-1.252962-0.417654-1.879443s-0.208827-1.252962-0.417654-1.670616c-0.208827-0.626481-0.417654-1.044135-0.835308-1.670616-0.208827-0.626481-0.417654-1.044135-0.835308-1.670617-0.208827-0.626481-0.626481-1.044135-1.044136-1.461789s-0.626481-1.044135-1.044135-1.461789-0.835308-0.835308-1.461789-1.252962l-1.252962-1.252962c-0.417654-0.417654-1.044135-0.626481-1.670616-1.044135-0.417654-0.208827-0.835308-0.626481-1.461789-0.835308l-230.336204-113.601899c-0.626481-0.417654-1.252962-0.626481-2.08827-0.835308-3.967713-1.461789-98.984008-34.665285-176.667659 0.208827l-171.446984 62.021625c-0.417654 0.208827-1.044135 0.417654-1.461789 0.626481-24.641588 11.276659-37.588864 36.544729-32.368188 63.06576 5.220676 26.312205 26.521032 44.897809 53.25089 46.150771h0.417654c1.670616 0 9.188389-0.417654 87.289695-5.429502 34.038804-2.08827 69.121744-4.385367 72.254149-4.594195 9.81487-0.417654 17.959124-8.353081 18.167951-18.376777 0.208827-10.441351-7.935427-19.212086-18.585605-19.420913-1.044135 0-1.044135 0-74.133592 4.594194-36.544729 2.297097-77.474825 5.011848-84.366117 5.429503-13.156102-1.044135-16.288508-12.111967-17.123815-15.4532-1.461789-7.100119 0.626481-16.497335 10.441351-21.300356l171.238156-62.021625c0.417654-0.208827 0.835308-0.417654 1.46179-0.626481 60.142182-27.35634 138.661141-2.714751 148.058357 0.208827l102.534067 50.536139-56.383296 133.022812c-27.773994-17.123816-61.603971-21.71801-92.928024-12.320794l-230.127376 69.121743c-27.35634 8.353081-57.636258 5.220676-82.904327-8.561907l-360.435437-195.253264c-12.947275-7.100119-8.770735-19.420913-7.7266-21.926838 1.252962-3.341232 6.682465-13.782583 19.838567-10.232524l280.037034 93.345679c9.81487 3.341232 20.673875-2.08827 24.015108-11.903141 3.341232-10.023697-2.08827-20.673875-11.90314-24.015107l-280.663516-93.763332c-0.417654-0.208827-0.626481-0.208827-1.044135-0.208827-27.773994-7.517773-54.712679 5.847157-65.362857 32.577015-10.859005 26.938686-0.626481 55.33916 24.850415 69.330571l360.644264 195.879745c34.038804 18.585605 74.760073 22.762145 111.722456 11.485486l230.127376-69.121744c21.091529-6.264811 43.853674-3.341232 62.43928 8.561908l117.360785 73.924765c0.626481 0.417654 1.044135 0.626481 1.670616 0.835308 0.208827 0 0.208827 0.208827 0.417654 0.208827h0.208827c0.208827 0.208827 0.417654 0.208827 0.835308 0.208827 0.417654 0.208827 1.044135 0.417654 1.461789 0.626481 0.208827 0 0.626481 0.208827 0.835308 0.208827 0.417654 0.208827 1.044135 0.208827 1.46179 0.417654 0.208827 0 0.626481 0 0.835308 0.208828 0.835308 0 1.461789 0.208827 2.297097 0.208827 0.835308 0 1.670616 0 2.505924-0.208827 0.208827 0 0.626481 0 0.835308-0.208828 0.626481 0 1.044135-0.208827 1.670616-0.417654 0.208827 0 0.626481-0.208827 0.835308-0.208827 0.417654-0.208827 1.044135-0.417654 1.46179-0.626481 0.208827-0.208827 0.626481-0.208827 0.835308-0.417654 0.417654-0.208827 0.835308-0.417654 1.461789-0.835308 0.208827-0.208827 0.626481-0.417654 0.835308-0.417654 0.417654-0.208827 0.835308-0.626481 1.252962-0.835308 0.208827-0.208827 0.626481-0.417654 0.835308-0.626481l1.044135-1.044135 0.835308-0.835308c0.417654-0.417654 0.626481-0.835308 0.835308-1.252962 0.208827-0.208827 0.417654-0.626481 0.626481-0.835308 0 0 0-0.208827 0.208827-0.208827 0-0.208827 0.208827-0.417654 0.208827-0.417654 0.208827-0.417654 0.626481-1.044135 0.835309-1.670617l83.530808-177.920621c0.208827-0.626481 0.417654-1.044135 0.626481-1.670616 0.208827-0.626481 0.417654-1.252962 0.626481-1.670616 0.208827-0.626481 0.208827-1.252962 0.208827-1.879443s0.208827-1.252962 0.208827-1.879443c0.208827-0.626481 0.208827-1.252962 0.208827-1.879444z m-43.853674 9.606043l-66.61582 141.793547-67.451127-42.600712 57.845084-136.572871 76.221863 37.380036zM321.297996 361.748959h53.042063c21.71801 0 39.25948 17.54147 39.25948 39.25948s-17.54147 39.25948-39.25948 39.25948h-95.433948c-10.441351 0-19.003259 8.561908-19.003259 19.003258s8.561908 19.003259 19.003259 19.003259h49.909657v37.380037c0 10.441351 8.561908 19.003259 19.003259 19.003259s19.003259-8.561908 19.003259-19.003259v-37.380037h7.7266c42.600712 0 77.265997-34.665285 77.265997-77.265997s-34.665285-77.265997-77.265997-77.265998h-53.042063c-21.71801 0-39.25948-17.54147-39.25948-39.25948s17.54147-39.25948 39.25948-39.259479h93.763332c10.441351 0 19.003259-8.561908 19.003259-19.003259s-8.561908-19.003259-19.003259-19.003259h-48.239042v-36.544729c0-10.441351-8.561908-19.003259-19.003259-19.003258s-19.003259 8.561908-19.003259 19.003258v36.753556h-7.726599c-42.600712 0-77.265997 34.665285-77.265998 77.265997 0.208827 42.391885 34.874112 77.05717 77.265998 77.057171z" fill="" /><path d="M348.027854 647.841977c168.314578 0 305.096277-136.990525 305.096277-305.096277s-136.990525-305.305104-305.096277-305.305104-305.305104 136.990525-305.305103 305.305104 136.990525 305.096277 305.305103 305.096277z m0-572.394863c147.431876 0 267.298586 119.86671 267.298586 267.298586s-119.86671 267.298586-267.298586 267.298586-267.298586-119.86671-267.298586-267.298586 119.86671-267.298586 267.298586-267.298586z" fill="" /></svg>
        </ServicesItem>
        <ServicesItem {...servicesItemInfo[3]}>
          <svg width="50px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M970.666667 377.6L797.866667 138.666667c-8.533333-10.666667-21.333333-19.2-36.266667-19.2H260.266667c-12.8 0-27.733333 6.4-36.266667 19.2l-170.666667 236.8c-12.8 14.933333-12.8 38.4 0 55.466666l424.533334 499.2c8.533333 8.533333 17.066667 14.933333 29.866666 14.933334h4.266667c10.666667 0 19.2-4.266667 27.733333-10.666667l6.4-6.4 181.333334-213.333333c8.533333-8.533333 6.4-23.466667-2.133334-29.866667-8.533333-8.533333-23.466667-6.4-29.866666 2.133333l-115.2 134.4 119.466666-411.733333h230.4l-108.8 128c-8.533333 8.533333-6.4 23.466667 2.133334 29.866667 8.533333 8.533333 23.466667 8.533333 29.866666 0l115.2-136.533334c12.8-14.933333 14.933333-38.4 2.133334-53.333333z m-206.933334-213.333333l147.2 202.666666H693.333333L554.666667 164.266667h209.066666zM326.4 409.6l119.466667 416L96 409.6h230.4z m313.6-42.666667H384l128-187.733333 128 187.733333zM260.266667 164.266667h211.2l-138.666667 204.8H113.066667l147.2-204.8zM512 900.266667l-142.933333-488.533334h283.733333L512 900.266667z"  /><path d="M778.666667 633.6m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"  /></svg>
        </ServicesItem>
      </ServicesWe>
      {/* weblog */}
      <WeblogContainer>
        <WeblogItem {...WeblogItemInfo[0]}></WeblogItem>
        <WeblogItem {...WeblogItemInfo[1]}></WeblogItem>
        <WeblogItem {...WeblogItemInfo[2]}></WeblogItem>
        <WeblogItem {...WeblogItemInfo[3]}></WeblogItem>
      </WeblogContainer>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
