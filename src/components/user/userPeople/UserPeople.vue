<template>
  <div>
    <el-row style="margin-bottom: 10px">
      <el-col :span="12">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item ><el-button size="medium" type="danger" round>人员伤亡及失踪</el-button></el-breadcrumb-item>
          <el-breadcrumb-item ><el-button size="medium" type="danger" round>死亡</el-button></el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="8" :offset="4">
        <el-button @click="dialog = true" type="primary" size="medium">搜索相关内容</el-button>
        <el-button @click="findAllPeoples(1 )" type="success" size="medium">显示所有内容</el-button>
      </el-col>
    </el-row>
    <el-table :data="peoples">
      <el-table-column label="编码" prop="code">
      </el-table-column>
      <el-table-column label="位置" prop="location">
      </el-table-column>
      <el-table-column label="日期" prop="date">
      </el-table-column>
      <el-table-column label="人数" prop="number">
      </el-table-column>
      <el-table-column label="上报单位" prop="reporting_unit">
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
          <el-form-item label="编码" :label-width="searchFormLabelWidth">
            <el-input v-model="searchForm.code" autocomplete="off" style="width: 80%" minlength="0"></el-input>
          </el-form-item>
          <el-form-item label="位置" :label-width="searchFormLabelWidth">
            <el-input v-model="searchForm.location" autocomplete="off" style="width: 80%" minlength="0"></el-input>
          </el-form-item>
          <el-form-item label="日期" :label-width="searchFormLabelWidth">
            <el-input v-model="searchForm.date" autocomplete="off" style="width: 80%" minlength="0"></el-input>
          </el-form-item>
          <el-form-item label="人数" :label-width="searchFormLabelWidth">
            <el-input v-model="searchForm.number" autocomplete="off" style="width: 80%" minlength="0"></el-input>
          </el-form-item>
          <el-form-item label="上报单位" :label-width="searchFormLabelWidth">
            <el-input v-model="searchForm.reporting_unit" autocomplete="off" style="width: 80%"
                      minlength="0"></el-input>
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
    name: "UserPeople",
    data() {
      return {
        total: 10,
        pageNow: 1,
        //搜索弹出框start
        dialog: false,
        loading: false,
        searchForm: {
          code: null,
          location: null,
          date: null,
          number: null,
          reporting_unit: null,
        },
        searchFormLabelWidth: '80px',
        timer: null,
        //搜索弹出框end


        //数据组
        peoples: []
        //数据组end
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



      //查找所有的人
      findAllPeoples(page) {
        if (page === undefined) {
          page = this.pageNow
        }
        this.$http.post("/user/people/page/" + page)
          .then(
            res => {
              this.peoples = res.data.onePageContent;
              this.total = res.data.totalElements;
            }
          )
      },


      //获取分页的信息
      findPageInfo(page) {
        this.findAllPeoples(page);
        console.log(page)
      },


      //搜索内容
      searchContent() {
        this.$http.post("/user/people/findAllWithSpecification", this.searchForm)
          .then(res => {
            // this.peoples = res.data;
            this.peoples = res.data;
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
