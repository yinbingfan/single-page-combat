<template>
  <div class="app-container">
    <el-row class="page-content">
      <el-col :span="24" style="margin:20px">
        <el-form label-width="200px" class="addform">
          <el-form-item label="附件">
            <file-upload
              class="el-button margin_left10 el-button--primary el-button--small"
              style="overflow:visible"
              :maximum="1"
              :multiple="false"
              　　ref="upload"
              　　v-model="files"
              　　post-action="url"
              　　@input-file="inputFile"
              　　@input-filter="inputFilter"
            >
              <span style="color:#FFFFFF">选取文件</span>
            </file-upload>
            <el-button
              size="small"
              type="primary"
              v-show="!$refs.upload || !$refs.upload.active"
              @click.prevent="$refs.upload.active = true"
            >
              <span style="color:#FFFFFF">开始上传</span>
            </el-button>
          </el-form-item>
          <el-form-item
            label="文件列表"
            class="fileList"
            v-show="files.length > 0"
          >
            <ul class="el-upload-list el-upload-list--text">
              <li
                class="el-upload-list__item is-ready"
                v-for="(file, index) in files"
                :key="index"
              >
                <span>{{ file.name }}</span>
              </li>
            </ul>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import { getFileId, deleteFileId } from "@/api/flca";
import "vue-upload-component/dist/vue-upload-component.part.css";
import FileUpload from "vue-upload-component";
export default {
  components: {
    FileUpload
  },
  data() {
    return {
      files: []
    };
  },
  methods: {
    upLoad() {
      this.$refs.upload.active = true;
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        const extension = newFile.name.substring(
          newFile.name.lastIndexOf(".") + 1
        );

        if (extension == "pdf" || extension == "PDF") {
        } else {
          this.$message({
            message: "上传文件只能是pdf格式文件!",
            type: "warning"
          });
          return prevent();
        }
      }
    },
    inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // 更新文件

        // 开始上传
        if (newFile.active !== oldFile.active) {
          this.isXls = false;
        }

        // 上传进度
        if (newFile.progress !== oldFile.progress) {
        }

        // 上传错误
        if (newFile.error !== oldFile.error) {
          this.$message({ message: "上传失败!", type: "error" });
        }

        // 上传成功
        if (newFile.success !== oldFile.success) {
          this.$message({ message: "上传成功!", type: "success" });
        }
      }
    }
  }
};
</script>
