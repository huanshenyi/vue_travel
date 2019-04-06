<template>
    <div>
      <div class="banner" @click="handleBannerClick">
        <img
          class="banner-img"
          src="http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_600x330_5abf0855.jpg"
          alt="">
          <div class="banner-info">
            <div class="banner-title">何処かの水族館</div>
            <div class="banner-number">
              <span class="iconfont banner-icon">&#xe6f5;</span>
              30
            </div>
          </div>
      </div>
      <common-gallary
        :imgs="imgs"
        v-show="showGallary"
        @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {CommonGallary},
  comments: {
    CommonGallary
  },
  data: function () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201403/07/2800cf465b3de1667d7161ac07fa7ab5.jpg_r_800x800_b6f3b611.jpg',
        'http://img1.qunarzz.com/sight/p0/201307/09/9446fc4fe48f052bc8d65eac.jpg_r_800x800_f7cc314a.jpg']
    }
  },
  methods: {
    handleBannerClick: function () {
      this.showGallary = true
    },
    handleGallaryClose: function () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang="stylus">
   .banner
     position relative
     overflow : hidden
     height 0
     padding-bottom :55%
     .banner-img
       width 100%
     .banner-info
       display flex
       position: absolute
       left 0
       right 0
       bottom 0
       line-height .6rem
       color #ffffff
       background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
       .banner-title
         font-size .32rem
         flex 1
         padding 0 .2rem
       .banner-number
         height : .32rem
         line-height .32rem
         margin-top .14rem
         padding 0 .4rem
         border-radius .2rem
         background : rgba(0, 0, 0, .8)
         font-size .24rem
         .banner-icon
           font-size .24rem

</style>
