 import { ElUpload } from "element-plus";


 import { App, createApp } from "vue";




 delete ElUpload.mounted

const ElUploadExtend=  {
  extends: ElUpload,
  mounted(){
    console.log(22222)
  }

}



const install = {
  install(App: App) {

      App.component('ceshi', ElUploadExtend);

  },
};

export default install;