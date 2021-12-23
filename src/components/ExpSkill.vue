<template>
  <div class="container-fluid">
    <div class="row justify-content-center py-5">
      <div class="col-12 col-md-8 col-lg-9 col-xxxl-7">
        <h2 class="exp-title">Experiences</h2>
        <el-timeline>
          <el-timeline-item timestamp="Jan 2020" placement="top">
            <el-card>
              <h3>Start the front-end learning journey —— Hex School 六角學院
                <a href="https://www.hexschool.com/" target="_blank">
                  <i class="el-icon-location-outline"></i>
                </a>
              </h3>
              <p class="mb-0">初入前端開發領域，我選擇彈性及時間靈活度較高的線上課程作為起步,</p>
              <p class="mb-0">持續保持每週投入平均有 20 小時以上的學習強度,</p>
              <p class="mb-0">期間完成所有基礎前端開發課程及實作並取得相關結業證書。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="Oct 2020" placement="top">
            <el-card>
              <h3>Another starting point —— Graduated from Hex School</h3>
              <p class="mb-0">進入獨立自主學習階段, 為個人設計學習路線及成長策略,</p>
              <p class="mb-0">期間持續擴增學習紀錄, 並實作 Taipei City Map、Sunset Shop 及其他個人專案成品。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="Jan 2021" placement="top">
            <el-card>
              <h3>Taiwan Data Science Co. —— Front-end Developer
                <a href="https://www.tdsc.com.tw/" target="_blank">
                  <i class="el-icon-location-outline"></i>
                </a>
              </h3>
              <p class="mb-0">這是一間整合資料、人流、大數據等資訊的新創科技公司, 在此獲得前端開發正式工作,</p>
              <p>期間負責多人協作、更新維護 1~2 個現有專案，並在以下二個專案中擔任主力前端開發職務,</p>
              <p class="mb-0">首個負責專案為
                <a href="#/wiside" target="_blank">Wiside 資料數據平台</a>
                ，其包含圖表呈現、動態移動軌跡等項目, 同時也參與邏輯及視覺呈現構思,</p>
              <p class="mb-0">技術主力在於 chart.js、D3.js、多國語系、驗證機制等技術, 完善多元資料的狀態管理與設計實現化,</p>
              <p>然而，此專案產品也於 2021年 8月份順利上線服務。</p>
              <p class="mb-0">第二個負責專案為 以藍芽 Beacon 偵測訊號 為核心的
                <a href="#/wiad" target="_blank">WiAD 廣告投放平台</a>
                ,</p>
              <p class="mb-0">其功能包含：完整的用戶權限架構、上下架廣告素材/排程、複雜表單、資料匯入/匯出、20個頁面以上 CRUD 操作等,</p>
              <p>然而，此專案產品也順利於 2021年末達成第一版完工之進度。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item class="now-point" timestamp="Now" placement="top"
          color="rgb(62, 115, 194)">
          </el-timeline-item>
        </el-timeline>
        <p class="text-center fz-14 mt-3 font-italic">
          "I am not worried about the future, just because I am more focused on now."
        </p>
      </div>
    </div>
    <div class="row justify-content-center bg-white py-5">
      <div class="col-12 col-md-8 col-lg-9 col-xxxl-7 text-dark">
        <h2 class="skill-title mb-4 d-flex justify-content-start align-items-center">
          <span class="mr-2">Skills</span>
          <el-popover class="fz-16 cursor-pointer"
            width="300"
            trigger="hover"
            content="綜合條件：使用頻率、掌握度、深入程度">
            <span slot="reference">
              <i class="el-icon-warning-outline"></i>
            </span>
          </el-popover>
        </h2>
        <div class="row">
          <div class="col-12 col-lg-6">
            <Skills />
          </div>
          <div class="col-12 col-lg-6">
            <Tools />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skills from '@/components/SkillsList.vue';
import Tools from '@/components/ToolsList.vue';

export default {
  components: {
    Skills,
    Tools,
  },
};
</script>

<style lang="scss">
  .exp-title, .skill-title{
    font-size: 2rem;
    font-family: Didot, serif;
  }
  .now-point .el-timeline-item__wrapper .is-top{
    font-weight: 600;
    font-size: 16px;
    color: rgb(62, 115, 194);
  }
</style>
