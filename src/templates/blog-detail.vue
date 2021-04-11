<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card shadow="never" style="min-height: 400px">
        <div slot="header">
          <el-row>
            <el-col :span="12">
              <span>{{ blog.title }}</span>
            </el-col>
            <el-col :span="12">
              <div style="text-align: right;">
                <el-button style="padding: 3px 0" type="text" icon="el-icon-share">分享</el-button>
                <el-button style=" padding: 3px 0" type="text" icon="el-icon-more-outline">更多博客</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          发布 {{ blog.createDate }}
          <br />
          更新 {{ blog.updateTime }}
        </div>
        <div
          style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px"
        >
          <pre style="font-family: '微软雅黑'">{{ blog.desc }}</pre>
          <div style="text-align:center ;height:300px">
            <g-image
              v-if="blog.cover"
              style="width:70%;height:300px"
              :src="getImageUrl + blog.cover.url"
            ></g-image>
            <g-image v-else style="width:70%;height:300px" src="@/assets/default.jpg"></g-image>
          </div>
        </div>
        <div
          v-html="transformData(blog.content || '')"
          class="markdown-body"
          style="padding-top: 20px"
        ></div>
      </el-card>
    </div>
  </Layout>
</template>

<page-query>
query($id:ID!){
  blog:strapiBlog(id : $id){
    id
    content
    title
    desc
    createDate
    updateTime
    cover {
      url
    }
   
  }
}

</page-query>

<script>
// import markdownIt from ;
// import markdown from ''
import markdownIt from "markdown-it";
let mk = new markdownIt();
export default {
  name: "BlogdetailPage",
  metaInfo() {
    return {
      title: this.blog.title,
    };
  },
  data() {
    return {
      blog: {},
    };
  },
  created() {
    this.blog = this.$page.blog;
  },
  methods: {
    transformData(val) {
      return mk.render(val);
    },
  },
  computed: {
    getImageUrl() {
      return process.env.GRIDSOME_API_URL;
    },
  },
};
</script>

<style></style>
