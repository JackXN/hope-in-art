import React from 'react';

import {Box, Text, Image, Link} from '@chakra-ui/react';
// import { Carousel } from "chakra-ui-carousel";
  // import Swiper bundle with all modules installed


  // import styles bundle
  import 'swiper/css/bundle';

  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100
});


const Index = () => {
  return (
    <div class="swiper-container">
    {/* <!-- Additional required wrapper --> */}
    <div class="swiper-wrapper">
        {/* <!-- Slides --> */}
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    {/* <!-- If we need pagination --> */}
    <div class="swiper-pagination"></div>

    {/* <!-- If we need navigation buttons --> */}
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    {/* <!-- If we need scrollbar --> */}
    <div class="swiper-scrollbar"></div>
</div>

  )
}



const styles = {
    wrapper: {

    }
}

export default Index
