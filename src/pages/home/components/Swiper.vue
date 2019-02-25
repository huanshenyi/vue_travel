<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
        speed: 300,
        autoplayDisableOnInteraction: false
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://www.club-t.com/special/bus/higaeri/images/headline/h_main.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://www.nishitetsutravel.jp/img/ssindex/main_slide12.png'
      }, {
        id: '0003',
        imgUrl: 'https://www.club-t.com/special/japan/sale/bus/higaeri/images/headline/h_main.jpg?20170127'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background :#fff
  .wrapper
    overflow :hidden
    width :100%
    height :0
    padding-bottom :31.25%
    background :#eee
   .swiper-img
     width :100%
</style>
