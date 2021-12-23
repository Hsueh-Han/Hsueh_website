<template>
  <div class="product-bg">
    <div class="bg-mask">
      <div class="container py-5">
        <div class="text-center">
          <h2 class="mb-0">ＷISIDE 訊號雲數據平台
            <small>( 產品現已正式上線 )</small>
          </h2>
          <el-divider></el-divider>
          <div class="px-5">
            <p>Vue、Vuex、Element UI、Vee-validate、Chart.js、D3.js</p>
            <p>本人擔任主要開發：負責專案項目約佔 95%</p>
            <p class="mb-0">本平台專案分為三大功能：即時資料呈現、歷史資料查詢、人流動態軌跡</p>
            <p class="mb-0">其中運用了眾多類型的圖表 ( Chart.js、D3.js )，因應不同資料維度的呈現</p>
            <p>針對頁面區塊中各自不同的資料處理邏輯，充分落實組件開發的元件規劃及切分</p>
            <p class="mb-0">在動態軌跡功能中，更是將 window.resize 事件加入 debounce 防抖機制來優化效能</p>
            <p class="mb-0">進而讓 D3.js 所繪製的動態效果可在使用者任何操作情況中仍保持最佳化呈現（可見下方展示影片）</p>
          </div>
          <el-divider></el-divider>
            <img class="w-100" src="@/assets/img/wiside/immediate.png">
            <img class="w-100" src="@/assets/img/wiside/history.png">
          <el-divider></el-divider>
          <p>軌跡效果：基本型</p>
          <div class="px-0 px-md-5">
            <video class="w-100" controls="controls" muted
              name="Video Name" src="../assets/video/wiside_01.mp4">
            </video>
          </div>
          <el-divider></el-divider>
          <p>效能優化：debounce 防抖機制</p>
          <div class="px-0 px-md-5">
            <video class="w-100" controls="controls" muted
              name="Video Name" src="../assets/video/wiside_debounce.mp4">
            </video>
          </div>
          <el-divider></el-divider>
          <p>動畫循環技術：單一循環及全項目循環之自由切換功能</p>
          <div class="px-0 px-md-5">
            <video class="w-100" controls="controls" muted
              name="Video Name" src="../assets/video/wiside_loop.mp4">
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
