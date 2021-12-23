<template>
  <div class="product-bg">
    <div class="bg-mask">
      <div class="container py-5">
        <div class="text-center">
          <h2 class="mb-0">WIAD 廣告投放平台</h2>
          <el-divider></el-divider>
          <div class="px-5">
            <p>Vue、Vuex、Element UI、Vee-validate、Chart.js</p>
            <p>本人擔任主要開發：負責專案項目約佔 85%</p>
            <p class="mb-0">本平台專案主要功能：廣告素材上架/下架、會員 CRM 系統、門店與裝置綁定系統、會員標籤系統、
              公司成員權限管理、數據分析圖表等</p>
            <p class="mb-0">其中運用大量的資料狀態管理、模組化、單/雙向數據流使用技巧，並且也透過 Vue Directive 自定義指令來妥善管理帳戶權限架構。</p>
          </div>
          <el-divider></el-divider>
            <img class="w-100" src="@/assets/img/wiad/wiad_01.png">
          <el-divider></el-divider>
          <p>即時預覽素材：高度且清晰切分各元件工作，忠實呈現透過資料來驅動畫面</p>
          <div class="px-0 px-md-5">
            <video class="w-100" controls="controls" muted
              name="Video Name" src="../assets/video/wiad_02.mp4">
            </video>
          </div>
          <el-divider></el-divider>
          <p>全局組件的編輯狀態管理：判斷當下是否為「編輯狀態」並判斷是否需要給予阻擋提示</p>
          <div class="px-0 px-md-5">
            <video class="w-100" controls="controls" muted
              name="Video Name" src="../assets/video/wiad_01.mp4">
            </video>
          </div>
          <el-divider></el-divider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.product-bg{
  background-image: url('../assets/img/photo-3.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  .bg-mask{
    background: rgba(255, 255, 255, 0.6);
  }
}
</style>
