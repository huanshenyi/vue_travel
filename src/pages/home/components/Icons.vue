<template>
  <div class="icons">
    <swiper >
      <swiper-slide v-for="(page,index) of pages" :key="index">
       <div class="icon" v-for="item in page" :key="item.id">
         <div class="icon-img">
           <img class="icon-img-content" :src="item.imgUrl" />
         </div>
           <p class="icon-desc">{{item.desc}}</p>
      </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '人気スポット'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: 'パワースポット'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '温泉地'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: 'キャンプ'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: 'パワースポット'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: 'パワースポット'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '古い所'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
        desc: 'スキー場'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: 'ファミリー'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
   .icons >>> .swiper-container
    //overflow->このエリアのあまり要素の処理方,hidden->余ると見えなくする
    /*overflow: hidden*/
    height :0
    //このdomの下までの長さが横幅の50%
    padding-bottom: 50%
   .icons
     margin-top : .1rem
     .icon
       position :relative
       //アイテムが左側へ移動
       overflow :hidden
       float :left
       width :25%
       height :0
       padding-bottom :25%
       .icon-img
        position :absolute
        top:0
        left :0
        right :0
        bottom :.44rem
        box-sizing :border-box
        padding :.1rem
        .icon-img-content
         display :block
         margin :0 auto
         height :100%
     .icon-desc
         position :absolute
         left :0
         right :0
         bottom :0
         height :.44rem
         line-height :.44rem
         text-align :center
         color: $darkTextColor
         ellipsis()
</style>
