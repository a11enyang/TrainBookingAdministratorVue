<template>
  <div>
    <el-row style="margin-bottom: 10px">
      <el-col :span="12">
          <el-breadcrumb-item ><el-button size="medium" type="danger" round>普通用户管理</el-button></el-breadcrumb-item>
      </el-col>
      <el-col :span="8" :offset="4">
        <el-button @click="dialog = true" type="primary" size="medium">搜索相关内容</el-button>
        <el-button @click="findAllPeoples(1 )" type="success" size="medium">显示所有内容</el-button>
      </el-col>
    </el-row>
    <el-table :data="ordinaryUsers">
      <el-table-column label="id" prop="id" width="100">
      </el-table-column>
      <el-table-column label="姓名" prop="name" width="100">
      </el-table-column>
      <el-table-column label="密码" prop="password" width="100">
      </el-table-column>
      <el-table-column label="邮箱" prop="email" width="100">
      </el-table-column>
      <el-table-column label="电话号码" prop="phonenum" width="100">
      </el-table-column>
      <el-table-column label="身份证" prop="personId" width="100">
      </el-table-column>
      <el-table-column label="类型" prop="type" width="100">
      </el-table-column>
      <el-table-column label="余额" prop="balance" width="100">
      </el-table-column>
      <el-table-column label="是否是学生" prop="isstudent" width="100">
      </el-table-column>
      <el-table-column label="是否拉入黑名单" prop="credit" width="100">
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
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="editForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" :label-width="formLabelWidth">
          <el-input v-model="editForm.phonenum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证" :label-width="formLabelWidth">
          <el-input v-model="editForm.personId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-input v-model="editForm.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="余额" :label-width="formLabelWidth">
          <el-input v-model="editForm.balance" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否是学生" :label-width="formLabelWidth">
          <el-input v-model="editForm.isstudent" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否拉入黑名单" :label-width="formLabelWidth">
          <el-input v-model="editForm.credit" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveInfo">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>

    <!--    搜索框-->
    <el-drawer
      title="搜索选项, 表单内容可以为空"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="searchForm">
          <el-form-item label="名字" :label-width="searchFormLabelWidth">
            <el-input v-model="searchForm.name" autocomplete="off" style="width: 80%" minlength="0"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="searchFormLabelWidth">
            <el-input v-model="searchForm.email" autocomplete="off" style="width: 80%" minlength="0"></el-input>
          </el-form-item>
          <el-form-item label="电话号码" :label-width="searchFormLabelWidth">
            <el-input v-model="searchForm.phonenum" autocomplete="off" style="width: 80%" minlength="0"></el-input>
          </el-form-item>
          <el-form-item label="身份证" :label-width="searchFormLabelWidth">
            <el-input v-model="searchForm.personId" autocomplete="off" style="width: 80%" minlength="0"></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确定'
            }}
          </el-button>
        </div>
      </div>
    </el-drawer>


  </div>
</template>

<script>
  export default {
    name: "OrdinUser",
    data() {
      return {
        total: 10,
        pageNow: 1,
        //搜索弹出框start
        dialog: false,
        loading: false,
        searchForm: {
          id: "",
          name: "",
          password: "",
          personId: "",
          email: "",
          phonenum: "",
          type: "",
          balance: "",
          isstudent: "",
          credit: ""
        },
        searchFormLabelWidth: '130px',
        timer: null,
        //搜索弹出框end


        //编辑弹出框start
        dialogFormVisible: false,
        formLabelWidth: '120px',
        editForm: {
          id: "",
          name: "",
          password: "",
          personId: "",
          email: "",
          phonenum: "",
          type: "",
          balance: "",
          isstudent: "",
          credit: "",
          realname: ""
        },
        //编辑弹出框end

        //数据列表begin
        ordinaryUsers: []
        //数据列表end
      }
    },
    methods: {
      successResult() {
        this.$message({
          message: '操作成功!',
          type: 'success'
        });
      },
      failResult() {
        this.$message.error('操作失败!');
      },

      /**
       * 删除操作
       * @param rowData
       */
      deletePeople(rowData) {
        //删除相应的人
        console.log(rowData);
        this.$http.post("/administratorapi/ordinaryuser/delete/" + rowData.id)
          .then(res => {
            if (res.data.status) {
              this.successResult();
              this.findAllPeoples();
            } else {
              this.failResult();
            }
          })
      },

      //编辑信息
      editPeople(rowData) {
        this.dialogFormVisible = true;
        this.editForm.id = rowData.id;
        this.editForm.name = rowData.name;
        this.editForm.personId = rowData.personId;
        this.editForm.email = rowData.email;
        this.editForm.phonenum = rowData.phonenum;
        this.editForm.type = rowData.type;
        this.editForm.balance = rowData.balance;
        this.editForm.isstudent = rowData.isstudent;
        this.editForm.credit = rowData.credit;
      },

      //查找所有的人
      findAllPeoples(page) {
        if (page === undefined) {
          page = this.pageNow
        }
        this.$http.post("/administratorapi/ordinaryuser/page/" + page)
          .then(
            res => {
              this.ordinaryUsers = res.data.onePageContent;
              this.total = res.data.totalElements;
            }
          )
      },


      //获取分页的信息
      findPageInfo(page) {
        this.findAllPeoples(page);
        console.log(page)
      },

      //保存信息
      saveInfo() {
        this.dialogFormVisible = false;
        //上传信息之后
        this.$http.post("/administratorapi/ordinaryuser/updateOne", this.editForm)
          .then(res => {
            if (res.data.status) {
              this.successResult();
              this.findAllPeoples();
            } else {
              this.failResult();
            }
          })
        //
      },

      //搜索内容
      searchContent() {
        this.$http.post("/administratorapi/ordinaryuser/search", this.searchForm)
          .then(res => {
            // this.peoples = res.data;
            this.ordinaryUsers = res.data;
          })
        this.$refs.drawer.closeDrawer();
      },

      //搜索弹出框start
      handleClose(done) {
        if (this.loading) {
          return;
        }
        this.$confirm('确定要提交搜索内容吗？')
          .then(_ => {
            this.loading = true;
            this.timer = setTimeout(() => {
              this.searchContent();
              done();
              // 动画关闭需要一定的时间
              setTimeout(() => {
                this.loading = false;
              }, 400);
            }, 2000);
          })
          .catch(_ => {
          });
      },
      cancelForm() {
        this.loading = false;
        this.dialog = false;
        clearTimeout(this.timer);
      },
      //搜索弹出框end
    },
    created() {
      this.findAllPeoples();
      this.findPageInfo();
    }
  }
</script>

<style scoped>

</style>
