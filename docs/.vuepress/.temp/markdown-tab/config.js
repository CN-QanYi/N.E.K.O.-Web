import { CodeTabs } from "D:/浅忆QanYi/Documents/TraeCN/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_09403ef658b66a1cba769b2b0c18cca0/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/浅忆QanYi/Documents/TraeCN/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_09403ef658b66a1cba769b2b0c18cca0/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/浅忆QanYi/Documents/TraeCN/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_09403ef658b66a1cba769b2b0c18cca0/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
