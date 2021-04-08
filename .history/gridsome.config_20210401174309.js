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
        apiURL: 'http://localhost:1337',
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
    }
  ],
  templates: {
    path: '/blog/:page',
    component: './src/templates/blog.vue'
    // F:\jty_workspace\new_homework\part3-4\blog-with-gridsome\src\pages\blogs\index.vue
  }
} 
