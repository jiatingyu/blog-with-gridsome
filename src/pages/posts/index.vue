<template>
  <div>
    <h1>这是posts页面</h1>
    <ul>
      <li v-for="item of posts" :key="item.node.id">{{item.node.title}}</li>
    </ul>
  </div>
</template>

<page-query>

query{
  posts : allPosts{
    edges{
      node{
        id
        title
        body
      }
    }
  }
}

</page-query>

<script>
export default {
  name: "posts",
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.posts = this.$page.posts.edges;
  }
};
</script>

<style>
</style>