<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">現在地</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">東京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">人気都市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">東京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">東京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">東京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">東京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">東京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">東京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">青森市</div>
          <div class="item border-bottom">相生市</div>
          <div class="item border-bottom">赤磐市</div>
          <div class="item border-bottom">赤平市</div>
          <div class="item border-bottom">網走市</div>
          <div class="item border-bottom">秋田市</div>
          <div class="item border-bottom">足利市</div>
          <div class="item border-bottom">安中市</div>
          <div class="item border-bottom">上尾市</div>
          <div class="item border-bottom">朝霞市</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">B</div>
        <div class="item-list">
          <div class="item border-bottom">美唄市</div>
          <div class="item border-bottom">坂東市</div>
          <div class="item border-bottom">豊前市</div>
          <div class="item border-bottom">別府市</div>
          <div class="item border-bottom">豊後大野市</div>
          <div class="item border-bottom">豊後高田市</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
   &:before
     border-color :#ccc
   &:after
     border-color #ccc
  .border-bottom
     &:before
       border-color #ccc
  .list
    overflow hidden
    position absolute
    top:1.58rem
    left 0
    right 0
    bottom 0
    .title
       line-height:.54rem
       background :#eee
       padding-left .2rem
       color : #666
       font-size .26rem
    .button-list
       overflow hidden
       padding :.1rem .6rem .1rem .1rem
       .button-wrapper
         float left
         width 33.33%
         .button
           margin :.1rem
           padding .1rem
           text-align: center
           border .02rem solid #ccc
           border-radius .06rem
    .item-list
       .item
        line-height :.76rem
        padding-left .2rem
</style>
