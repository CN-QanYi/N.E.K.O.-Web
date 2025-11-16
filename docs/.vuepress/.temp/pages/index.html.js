import comp from "D:/浅忆QanYi/Documents/TraeCN/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1763272019000,\"contributors\":[{\"name\":\"浅忆QanYi\",\"username\":\"\",\"email\":\"humiao07@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"0aa674fd7d2fbaf9ab6ade7847eddbd63acc6bed\",\"time\":1763272019000,\"email\":\"humiao07@qq.com\",\"author\":\"浅忆QanYi\",\"message\":\"Initial commit: VuePress starter project\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
