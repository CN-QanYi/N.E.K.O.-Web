import { GitContributors } from "D:/浅忆QanYi/Documents/TraeCN/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_11435d3d2240a8c0340c49e1f6b64ee9/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/浅忆QanYi/Documents/TraeCN/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_11435d3d2240a8c0340c49e1f6b64ee9/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
