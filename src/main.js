// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
// import './index.css'
import util from './assets/util'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'mavon-editor/dist/markdown/github-markdown.min.css'
import store from './store'
// export default function (Vue, { router, head, isClient, ... }) {
export default function (Vue, params) {
  // Set default layout as a global component
  Vue.use(ElementUI).use(mavonEditor);
  // Vue.minix({
  //   before() {
  //     store
  //   }
  // })
  // 这里不能做到。。。。
  // Vue.mixin({
  //   beforeCreate: function () {
  //     this.$options.store = store
  //     this.$options.$store = store
  //   }
  // })

  // 。。。。。


  // 通过混入给全局加data 
  Vue.mixin({
    data() {
      return {
        // GRIDSOME_API_URL: process.env.GRIDSOME_API_URL,
        // defaultImg: '@/assets/default.jpg'
      }
    }
  })

  Vue.component('Layout', DefaultLayout)


  Vue.prototype.$markdown = function (value) {
    return mavonEditor.markdownIt.render(value)
  }

  Vue.prototype.$reload = function (context) {
    let NewPage = '/empty'
    context.$router.push(NewPage)
    context.$nextTick(() => (context.$router.go(-1)))
  }

  Vue.prototype.$setTitle = function (title) {
    if (title) {
      document.title = store.state.configuration.htmlTitle + " - " + title
    } else {
      document.title = store.state.configuration.htmlTitle
    }
  }
  // Vue.prototype.$share = function (message) {
  //   if (process.isClient) {
  //     if (!message) {
  //       message = window.location
  //     } else {
  //       let arr = (window.location + "").split("#")
  //       message = arr[0] + "#" + message
  //     }
  //     if (util.copy(message)) {
  //       Vue.prototype.$confirm('链接已复制,去分享给好友吧!!', '分享', {
  //         showCancelButton: false,
  //         showClose: false,
  //         type: 'success'
  //       })
  //     } else {
  //       Vue.prototype.$confirm('链接复制失败,可能因为浏览器不兼容', '分享', {
  //         showCancelButton: false,
  //         showClose: false,
  //         type: 'warning'
  //       })
  //     }
  //   }
  // }

  // Vue.prototype.$mobileShare = function (message) {
  //   if (process.isClient) {
  //     if (!message) {
  //       message = window.location
  //     } else {
  //       let arr = (window.location + "").split("#")
  //       message = arr[0] + "#" + message
  //     }
  //     if (util.copy(message)) {
  //       Vue.prototype.$dialog.alert({
  //         title: '分享',
  //         message: '链接已复制,去分享给好友吧!!'
  //       })
  //     } else {
  //       Vue.prototype.$dialog.alert({
  //         title: '分享',
  //         message: '链接复制失败,可能因为浏览器不兼容'
  //       })
  //     }
  //   }
  // }



  Vue.prototype.$util = util

  Vue.config.productionTip = false
}
