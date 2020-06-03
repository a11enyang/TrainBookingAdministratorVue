<template>
  <el-row>
    <el-col :span="14" :offset="5">
      <el-form ref="form" :model="form" label-width="110px">
        <el-form-item label="请求方">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="IP地址">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="目标服务器地址">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="即时处理">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="人员伤亡及失踪">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="伤亡" name="type"></el-checkbox>
            <el-checkbox label="失踪" name="type"></el-checkbox>
            <el-checkbox label="受伤" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="房屋破坏">
          <el-radio-group v-model="form.resource">
            <el-checkbox label="土木" name="type"></el-checkbox>
            <el-checkbox label="砖木" name="type"></el-checkbox>
            <el-checkbox label="砖混" name="type"></el-checkbox>
            <el-checkbox label="框架" name="type"></el-checkbox>
            <el-checkbox label="其他" name="type"></el-checkbox>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生命线灾难">
          <el-radio-group v-model="form.resource">
            <el-checkbox label="交通" name="type"></el-checkbox>
            <el-checkbox label="供水" name="type"></el-checkbox>
            <el-checkbox label="输油" name="type"></el-checkbox>
            <el-checkbox label="燃气" name="type"></el-checkbox>
            <el-checkbox label="电力" name="type"></el-checkbox>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="次生灾害">
          <el-radio-group v-model="form.resource">
            <el-checkbox label="崩塌" name="type"></el-checkbox>
            <el-checkbox label="滑坡" name="type"></el-checkbox>
            <el-checkbox label="泥石流" name="type"></el-checkbox>
            <el-checkbox label="塌陷" name="type"></el-checkbox>
            <el-checkbox label="地裂缝" name="type"></el-checkbox>
            <el-checkbox label="其他" name="type"></el-checkbox>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="地震灾情">
          <el-radio-group v-model="form.resource">
            <el-checkbox label="基本震情" name="type"></el-checkbox>
            <el-checkbox label="灾情预测" name="type"></el-checkbox>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "UserRequest",
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>

</style>
