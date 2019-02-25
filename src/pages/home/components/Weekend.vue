<template>
  <div>
    <div class="title">日帰り旅</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img"  :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
        title: '何処かの動物園',
        desc: '関係ないけど,アクアマン絶賛上映中',
        price: '5000'
      }, {
        id: '0002',
        imgUrl: 'https://www.knt.co.jp/meito/images/okinawa_honto_mv.jpg',
        title: '沖縄',
        desc: '日帰り無理そう',
        price: '9000'
      }, {
        id: '0003',
        imgUrl: 'http://52.197.240.168/bus/column/image/61ise/61ise_mv.jpg',
        title: '伊勢神宮',
        desc: '行ったことない',
        price: '8900'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top :.2rem
    line-height :.8rem
    background : #eee
    text-indent :.2rem
  .item-img-wrapper
     overflow: hidden
     height :0
     padding-bottom : 33.9%
     .item-img
          width:100%
    .item-info
      padding :.1rem
      .item-title
        line-height :.54rem
        font-size : .32rem
        ellipsis()
      .item-desc
        line-height : .4rem
        color :#ccc
        ellipsis()
</style>
