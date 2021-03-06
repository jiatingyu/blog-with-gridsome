// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'jiatingyu',
  siteDescription: 'This is a base gridsome of blog Application',
  siteUrl: 'http://blog-g.jiatingyu.xyz',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        apiURL: 'http://117.50.64.69:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['active', 'blog'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './markdown/**/*.md',
        typeName: 'markdown'
      }
    }
  ],
  templates: {
    // 这里的posts要必须有集合
    // posts: [{
    //   path: '/posts/:id',
    //   component: './src/templates/posts.vue'
    // }]
    StrapiBlog: [{
      path: '/blogs/:id',
      component: './src/templates/blog-detail.vue'
    }]
  }
} 
