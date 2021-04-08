<template>
  <Layout>
    <h2>请填写基本信息</h2>
    <el-form :label-position="'left'" label-width="150px" :model="subInfo">
      <el-form-item label="姓名：">
        <el-input v-model="subInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="联系电话：">
        <el-input v-model="subInfo.phone"></el-input>
      </el-form-item>
      <el-form-item label="留言：">
        <el-input type="textarea" rows="4" v-model="subInfo.desc"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submit()">提交</el-button>
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
        createDate: new Date()
      }
    };
  },
  methods: {
    async submit() {
      // console.log(this.subInfo);
      let { data } = axios.request({
        url: "http://localhost:1337/concats",
        method: "post",
        data: this.subInfo,
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(data);
    }
  }
};
</script>

<style></style>
