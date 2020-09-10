<template>
  <div>
    <el-row style="margin-bottom: 10px">
      <el-col :span="6">
        <el-breadcrumb-item ><el-button size="medium" type="danger" round>票务端用户管理</el-button></el-breadcrumb-item>
      </el-col>
      <el-col :span="6" :offset="12">
        <el-button @click="editPeople" type="primary" size="medium">添加</el-button>
        <el-button @click="findAllPeoples(1 )" type="success" size="medium">显示所有内容</el-button>
      </el-col>
    </el-row>
    <el-table :data="ticketUsers">
      <el-table-column label="序号" prop="id" width="150">
      </el-table-column>
      <el-table-column label="姓名" prop="name" width="150">
      </el-table-column>
      <el-table-column label="密码" prop="password" width="150">
      </el-table-column>
      <el-table-column fixed="right" label="操作 " width="200">
        <template slot-scope="scope">
          <el-button @click="deletePeople(scope.row)" type="danger" size="small">删除</el-button>
          <el-button type="primary" size="small" @click="editPeople(scope.row)">编辑</el-button>
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

    <!--编辑弹出框-->
    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible" center>
      <el-form :model="editForm">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="editForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="editForm.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveTicketUser">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import utils from "../utils/utils";
  import transferData from "../api/transferData";
  export default {
    data() {
      return {
        total: 10,
        pageNow: 1,

        //编辑弹出框start
        dialogFormVisible: false,
        formLabelWidth: '120px',
        editForm: {
          id: "",
          name: "",
          password: "",
          staffId: "0",
          userType: "0"
        },
        //编辑弹出框end

        //数据列表begin
        ticketUsers: []
        //数据列表end
      }
    },
    methods: {
      /**
       * 删除操作
       * @param rowData
       */
      deletePeople(rowData) {
        //删除相应的人
        transferData.deleteTicketUser(rowData.id).then(res => {
          utils.sucess("删除成功");
          this.findAllPeoples();
        })
      },

      //编辑信息
      editPeople(rowData) {
        this.dialogFormVisible = true;
        this.editForm.id = rowData.id;
        this.editForm.name = rowData.name;
        this.editForm.password = rowData.password;
        this.editForm.staffId = '0';
        this.editForm.userType = '0';
      },

      //查找所有的人
      findAllPeoples(page) {
        if (page === undefined) {
          page = this.pageNow
        }
        transferData.findAllTicketUsers(page).then(res => {
          console.log(res);
          this.ticketUsers = res.data.data.onePageContent;
          this.total = res.data.data.totalElements;
        })
      },

      //获取分页的信息
      findPageInfo(page) {
        this.findAllPeoples(page);
      },

      //保存信息
      saveTicketUser() {
        this.dialogFormVisible = false;
        transferData.saveTicketUser(this.editForm).then( res => utils.sucess("保存成功"));
      },

    },
    created() {
      this.findAllPeoples();
      this.findPageInfo();
    }
  }
</script>

<style scoped>

</style>
