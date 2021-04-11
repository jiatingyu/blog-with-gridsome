<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card shadow="never" style="margin-bottom: 20px">
        <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
        <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
        <el-button
          @click="$share()"
          style="margin-left: 10px"
          icon="el-icon-share"
          type="warning"
          plain
          circle
        ></el-button>
      </el-card>

      <div v-if="$page.posts.edges && $page.posts.edges.length > 0">
        <el-card
          shadow="hover"
          v-for="item in $page.posts.edges"
          :key="item.id"
          style="margin-bottom: 20px"
        >
          <div slot="header">
            <el-row>
              <el-col :span="16">
                <span>
                  <g-link
                    :to="'/blogs/' + item.node.id"
                    style="text-decoration:none;cursor:pointer"
                  >
                    <i class="el-icon-edit-outline"></i>
                    &nbsp;&nbsp; {{ item.node.title }}
                  </g-link>
                </span>
              </el-col>
            </el-row>
          </div>
          <g-link :to="'/blogs/' + item.node.id">
            <el-row>
              <el-col :span="6">
                <g-image
                  v-if="item.node.cover"
                  :src="getImageUrl + item.node.cover.url"
                  style="width:80%"
                ></g-image>
                <g-image v-else style="width:80%" src="@/assets/default.jpg"></g-image>
              </el-col>
              <el-col :span="18">
                <div
                  style="font-size: 0.9rem;line-height: 1.5;color: #606c71;"
                >最近更新 {{ item.node.updateTime }}</div>
                <div
                  style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px"
                >{{ item.node.desc }}</div>
              </el-col>
            </el-row>
          </g-link>
        </el-card>
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="pageInfo.totalItems"
          @current-change="changePageNum"
        ></el-pagination>
      </div>

      <el-card
        shadow="never"
        style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
        v-if="!blogs || blogs.length == 0"
      >
        <font style="font-size: 30px;color:#dddddd ">
          <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
        </font>
      </el-card>
    </div>
  </Layout>
</template>

<page-query>
 query($page : Int){
    posts : allStrapiBlog(perPage:1,page : $page) @paginate {
        pageInfo{
          totalPages
          totalItems
        }
        edges{
          node{
            id
            title
            cover{
              url
            }
            desc
            createDate
            attention
            updateTime
          }
        }
      }
 }

</page-query>

<script>
export default {
  name: "BlogsPage",
  data() {
    return {
      blogs: [],
      searchKey: "",
      pageInfo: {
        totalPages: 0,
        totalItems: 0,
      },
      currentPage: 1,
      pageSize: 1,
    };
  },
  metaInfo: {
    title: "我的博客",
    meta: [{ name: "description", content: `我的博客-jiatingyu` }],
  },
  created() {
    this.blogs = this.$page.posts.edges;
    this.pageInfo = this.$page.posts.pageInfo;
  },
  computed: {
    getImageUrl() {
      return process.env.GRIDSOME_API_URL;
    },
  },
  mounted() {
    this.currentPage = +this.$route.params.page || 1;
  },
  methods: {
    search() {},
    changePageNum(num) {
      this.currentPage = num || 1;
      this.$router.push({
        path: num != 1 ? `/myblogs/${num}` : "/myblogs",
      });
    },
  },
};
</script>

<style></style>
