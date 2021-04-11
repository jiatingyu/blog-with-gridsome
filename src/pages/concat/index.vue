<template>
  <Layout>
    <h2>请填写基本信息</h2>
    <el-form :label-position="'left'" label-width="150px" ref="subInfo" :model="subInfo">
      <el-form-item label="姓名：" prop="username">
        <el-input v-model="subInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="联系电话：" prop="phone">
        <el-input v-model="subInfo.phone"></el-input>
      </el-form-item>
      <el-form-item label="留言：" prop="desc">
        <el-input type="textarea" rows="4" v-model="subInfo.desc"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-form>
  </Layout>
</template>

<script>
import axios from "axios";
export default {
  name: "ConcatPage",
  data() {
    return {
      subInfo: {
        username: "",
        phone: "",
        desc: "",
        create_date: new Date()
      }
    };
  },
  metaInfo: {
    title: "联系我",
    meta: [{ name: "description", content: `联系我-jiatingyu` }]
  },
  methods: {
    async submit() {
      try {
        await axios.request({
          url: process.env.GRIDSOME_API_URL + "/concats",
          method: "post",
          data: this.subInfo,
          headers: {
            "Content-Type": "application/json"
          }
        });
        this.$message({
          message: "保存成功！！！",
          type: "info"
        });
        this.$refs["subInfo"].resetFields();
      } catch (error) {
        this.$message({
          message: error,
          type: "error"
        });
      }
    }
  }
};
</script>

<style></style>
