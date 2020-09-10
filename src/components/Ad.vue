<template>
  <div>
    <el-row style="margin-bottom: 10px">
      <el-col :span="8">
        <el-breadcrumb-item>
          <el-button size="medium" type="danger" round>广告管理</el-button>
        </el-breadcrumb-item>
      </el-col>
      <el-col :span="7" :offset="9">
        <el-button @click="editAd" type="primary" size="medium">添加</el-button>
        <el-button @click="findAllAds(1 )" type="success" size="medium">显示所有内容</el-button>
      </el-col>
    </el-row>
    <el-table :data="ordinaryUsers">
      <el-table-column label="序号" prop="id" width="150">
      </el-table-column>
      <el-table-column label="照片描述" prop="photo" width="150">
      </el-table-column>
      <el-table-column label="照片链接" prop="link" width="150">
      </el-table-column>
      <el-table-column fixed="right" label="操作 " width="200">
        <template slot-scope="scope">
          <el-button @click="deleteAd(scope.row)" type="danger" size="small">删除</el-button>
          <el-button type="primary" size="small" @click="editAd(scope.row)">编辑</el-button>
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
                       @current-change="findPageAdInfo"
                       :current-page="pageNow"
                       :total="total">
          <!--                        total 一共多少条记录-->
        </el-pagination>
      </el-col>
    </el-row>

    <!--编辑弹出框-->
    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible" center>
      <el-form :model="editForm">
        <el-form-item label="photo" :label-width="formLabelWidth">
          <el-input v-model="editForm.photo" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="link" :label-width="formLabelWidth">
          <el-input v-model="editForm.link" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveInfo">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import transferData from "../api/transferData";
  import utils from "../utils/utils";

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
          photo: "",
          link: ""
        },
        //编辑弹出框end

        //数据列表begin
        ordinaryUsers: []
        //数据列表end
      }
    },
    methods: {
      //删除广告
      deleteAd(rowData) {
        transferData.deleteAd(rowData.id).then(res => utils.sucess("删除成功"));
      },

      //编辑广告
      editAd(rowData) {
        this.dialogFormVisible = true;
        this.editForm.id = rowData.id;
        this.editForm.photo = rowData.photo;
        this.editForm.link = rowData.link;
      },

      //查找所有的广告
      findAllAds(page) {
        if (page === undefined) {
          page = this.pageNow
        }
        transferData.findAllAds(page).then(res => {
          this.ordinaryUsers = res.data.data. onePageContent;
          this.total = res.data.data.totalElements;
        })
      },

      //获取分页的信息
      findPageAdInfo(page) {
        this.findAllAds(page);
      },

      //保存信息
      saveInfo() {
        this.dialogFormVisible = false;
        transferData.saveAd(this.editForm).then(res => {
          utils.sucess("保存成功");
          this.findAllAds();
        });
      },

    },
    created() {
      this.findAllAds();
      this.findPageAdInfo();
    }
  }
</script>

<style scoped>

</style>
