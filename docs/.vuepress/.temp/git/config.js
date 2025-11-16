import { GitContributors } from "D:/浅忆QanYi/Documents/TraeCN/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_2987c16349c711aac39033997b2bce69/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/浅忆QanYi/Documents/TraeCN/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_2987c16349c711aac39033997b2bce69/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
