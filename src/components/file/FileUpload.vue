<template>
  <el-row>
    <el-col offset="8" :span="12">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传json文件</div>
      </el-upload>
    </el-col>
  </el-row>

</template>

<script>
    export default {
        name: "FileUpload"
    }
</script>

<style scoped>

</style>
