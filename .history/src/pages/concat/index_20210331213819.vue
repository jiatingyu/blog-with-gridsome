<template>
  <Layout>
    <h2>请填写基本信息</h2>
    <el-form :label-position="'left'" label-width="150px" :model="formLabelAlign">
      <el-form-item label="姓名：">
        <el-input v-model="subInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="联系电话：">
        <el-input v-model="subInfo.phone"></el-input>
      </el-form-item>
      <el-form-item label="留言：">
        <el-input v-model="subInfo.desc"></el-input>
      </el-form-item>
      <el-button type="primary">提交</el-button>
    </el-form>
  </Layout>
</template>

<script>
export default {
  name: "ConcatPage",
  data() {
    return {
      subInfo: {
        username: "",
        phone: "",
        desc: ""
      }
    };
  }
};
</script>

<style></style>
