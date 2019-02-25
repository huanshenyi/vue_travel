<template>
  <div>
    <div class="title">おすすめ</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img"  :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <label class="item-price">{{item.price}}円</label>
          <button class="item-button">詳細確認</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg',
        title: '何処かの水族館',
        desc: '関係ないけど,アクアマン絶賛上映中',
        price: '5000'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1901/ea/ea459039354370daa3.img.jpg_200x200_8c51fc3d.jpg',
        title: '海外旅行',
        desc: '一週間位だろうな',
        price: '90000'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_200x200_69e4a80d.jpg',
        title: 'とあるスキー場',
        desc: 'そろそろ終わりかな',
        price: '18900'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg',
        title: 'ジュラシックパーク',
        desc: '怖い',
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
 .item
   overflow :hidden
   display: flex
   height :1.9rem
   .item-img
    width:1.7rem
    height :1.7rem
    padding : .1rem
   .item-info
    flex :1
    padding :.1rem
    min-width : 0
    .item-title
     line-height :.54rem
     font-size : .32rem
     ellipsis()
    .item-desc
     line-height : .4rem
     color :#ccc
     ellipsis()
    .item-button
      line-height : .44rem
      margin-top : .16rem
      //margin-left:  2.04rem
      float :right
      background :#ff9300
      padding :0 .2rem
      border-radius : .06rem
      color :#fff
    .item-price
      line-height : .44rem
      margin-top : .44rem
      padding : 0.1rem
      border-radius : .06rem
      color :royalblue
</style>
