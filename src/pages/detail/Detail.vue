<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data: function () {
    return {
      list: [{
        title: '大人',
        children: [{
          title: '大人三人グループ',
          children: [{
            title: '大人三人グループ-指定店舗'
          }]
        }, {
          title: '大人五人グループ'
        }]
      }, {
        title: '学生'
      }, {
        title: '子供'
      }, {
        title: 'サービス'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
 .content
   height 50rem
</style>
