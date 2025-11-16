export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"VuePress Starter\",\"description\":\"VuePress Starter Project\",\"head\":[[\"meta\",{\"charset\":\"utf-8\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0\"}],[\"meta\",{\"name\":\"description\",\"content\":\"VuePress Starter Project\"}],[\"meta\",{\"http-equiv\":\"X-UA-Compatible\",\"content\":\"IE=edge\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
