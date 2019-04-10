<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
      観光詳細
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailHeader',
  data: function () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll: function () {
      const top = document.documentElement.scrollTop
      if (top > 52) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .header-abs
    position :absolute
    left : .2rem
    top: .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    text-align center
    background :rgba(0,0,0,.8)
    .header-abs-back
     color #ffffff
     font-size .4rem
  .header-fixed
    position :fixed
    top:0
    left 0
    right 0
    height : $headerHeight
    line-height: $headerHeight
    text-align: center
    color :#fff
    background : $bgColor
    font-size: .4rem
    .header-fixed-back
      position absolute
      top:0
      left 0
      width .64rem
      text-align :center
      font-size : .4rem
      color white
</style>
