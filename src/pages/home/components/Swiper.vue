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
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://www.yomiuri-ryokou.co.jp/cruise/antarctic/imgs/antarctic_mv.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://www.nishitetsutravel.jp/img/ssindex/main_slide12.png'
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
