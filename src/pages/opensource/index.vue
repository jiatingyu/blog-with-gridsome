<template>
  <Layout>
    <h2>Opensource Blogs list</h2>
    <ul>
      <li v-for="item of $page.posts.edges" :key="item.id">{{item.node.title}}</li>
    </ul>
    <el-pagination
      background
      layout="prev, pager, next"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="$page.posts.pageInfo.totalItems"
      @current-change="changePageNum"
    ></el-pagination>
  </Layout>
</template>

<page-query>

query($page : Int){
  posts : allPosts(perPage:10,page:$page) @paginate{
   pageInfo{
          totalPages
          totalItems
        }
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
  name: "OpenSourcePage",
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      pageInfo: {
        totalItems: 0,
        totalPages: 0
      }
    };
  },
  metaInfo: {
    title: "开源项目",
    meta: [{ name: "description", content: `开源项目-jiatingyu` }]
  },
  created() {
    this.currentPage = this.$route.params.page || 1;
  },
  methods: {
    changePageNum(num) {
      let reg1 = /^(\d)+$/;
      if (reg1.test(num)) {
        this.$router.push({
          path: num != 1 ? `/opensource/${num}` : "/opensource"
        });
      }
    }
  }
};
</script>

<style></style>
