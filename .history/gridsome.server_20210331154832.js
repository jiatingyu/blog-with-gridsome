// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
import axios from 'axios'
module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // 用axios 来加载jsonplaceholder 的测试数据
    let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    let collection = addCollection('posts');
    if (data) {
      for (const item of data) {
        collection.addNode({
          id: item.id,
          title: item.title,
          body: item.body
        })

      }
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
