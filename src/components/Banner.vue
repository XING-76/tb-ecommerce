<template>
  <div class="carousel-block mb-5">
    <swiper
      class="swiper"
      :centeredSlides="true"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :slidesPerView="1"
    >
      <swiper-slide v-for="banner in banners" :key="banner.id">
        <img :src="banner.url" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          clickable: true
        },
        slidesPerView: 1
      },
      banners: [
        {
          id: '1',
          url: 'https://i.imgur.com/iIs90Jg.jpg'
        },
        {
          id: '2',
          url: 'https://i.imgur.com/8CZt3ou.png'
        },
        {
          id: '3',
          url: 'https://i.imgur.com/udEkCQG.png'
        }
      ]
    }
  }
}
</script>
