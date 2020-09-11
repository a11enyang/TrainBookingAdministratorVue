<template>
  <div>
    <el-row style="margin-bottom: 10px">
      <el-col :span="6">
        <el-breadcrumb-item>
          <el-button size="medium" type="danger" round>日志查看</el-button>
        </el-breadcrumb-item>
      </el-col>
      <el-col :span="6" :offset="12">
        <el-button @click="findAllLogs(1 )" type="success" size="medium">显示所有内容</el-button>
      </el-col>
    </el-row>
    <el-table :data="logs">
      <el-table-column label="日志ID" prop="id" width="150">
      </el-table-column>
      <el-table-column label="用户名" prop="username" width="150">
      </el-table-column>
      <el-table-column label="用户IP" prop="clientip" width="150">
      </el-table-column>
      <el-table-column label="创建时间" prop="createtime" width="150">
      </el-table-column>
      <el-table-column label="操作描述" prop="describes" width="150">
      </el-table-column>
      <el-table-column label="操作单元" prop="operationunit" width="150">
      </el-table-column>
      <el-table-column label="操作类型" prop="operationtype" width="150">
      </el-table-column>
      <el-table-column fixed="right" label="操作 " width="200">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="showLogContent(scope.row)">查看详细内容</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="8" :offset="8">
        <!--分页组件-->
        <el-pagination style="margin: 15px 0px;"
                       background
                       prev-text="上一页"
                       next-text="下一页"
                       layout="prev, pager, next, total, jumper"
                       @current-change="findPageInfo"
                       :current-page="pageNow"
                       :total="total">
          <!--                        total 一共多少条记录-->
        </el-pagination>
      </el-col>
    </el-row>

    <!--详细内容弹出框-->
    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible" center>
      <el-form :model="detail">
        <el-form-item label="日志ID" :label-width="labelWidth">
          <el-input v-model="detail.id" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="创建时间" :label-width="labelWidth">
          <el-input v-model="detail.createtime" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="labelWidth">
          <el-input v-model="detail.username" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="用户IP" :label-width="labelWidth">
          <el-input v-model="detail.clientip" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="操作描述" :label-width="labelWidth">
          <el-input v-model="detail.describes" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="参数" :label-width="labelWidth">
          <el-input v-model="detail.args" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="等级" :label-width="labelWidth">
          <el-input v-model="detail.level" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">确定</el-button>
        </div>
      </el-form>
    </el-dialog>
    <!--详细内容弹出框-->

  </div>
</template>

<script>
  import utils from "../utils/utils";
  import transferData from "../api/transferData";
  export default {
    name: "SystemLog",
    data() {
      return {
        total: 10,
        pageNow: 1,
        //数据列表begin
        logs: [],
        //数据列表end

        labelWidth: "",

        //详细内容弹出框begin
        dialogFormVisible: false,
        //详细内容弹出框end

        detail: {
          id: "",
          username: "",
          createtime: "",
          args: "",
          clientip: "",
          describes: "",
          level: "",
          method: "",
          operationtype: "",
          operationunit: "",
          returnvalue: "",
          runtimes: "",
        }
      }
    },
    methods: {

      //详细信息弹出框
      showLogContent(rowData) {
        this.dialogFormVisible = true;
        this.detail.id = rowData.id;
        this.detail.username = rowData.username;
        this.detail.clientip = rowData.clientip;
        this.detail.args = rowData.args;
      },

      //查找所有的日志
      findAllLogs(page) {
        if (page === undefined) {
          page = this.pageNow
        }
        transferData.findSystemLog(page).then(res => {
          this.logs = res.data.data.onePageContent;
          this.total = res.data.data.totalElements;
        })
      },

      //获取分页的信息
      findPageInfo(page) {
        this.findAllLogs(page);
      },

    },
    created() {
      this.findAllLogs();
      this.findPageInfo();
    }
  }
</script>

<style scoped>

</style>
