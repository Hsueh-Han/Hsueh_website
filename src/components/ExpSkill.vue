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
              <p class="mb-0">初入前端開發領域, 我選擇彈性及時間靈活度較高的線上課程作為起步,</p>
              <p class="mb-0">持續保持每週投入平均有 20 小時以上的學習強度,</p>
              <p class="mb-0">期間完成所有基礎前端開發課程及實作並取得相關結業證書。</p>
            </el-card>
          </el-timeline-item>
          <!-- <el-timeline-item timestamp="Oct 2020" placement="top">
            <el-card>
              <h3>Another starting point —— Graduated from Hex School</h3>
              <p class="mb-0">進入獨立自主學習階段, 為個人設計學習路線及成長策略,</p>
              <p class="mb-0">期間持續擴增學習紀錄, 並實作 Taipei City Map、Sunset Shop 及其他個人專案成品。</p>
            </el-card>
          </el-timeline-item> -->
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
          <el-timeline-item timestamp="Mar 2022" placement="top">
            <el-card>
              <h3>KKday 酷遊天股份有限公司 —— Front-end Developer
                <a href="https://www.kkday.com/static/zh-tw/about/about.html" target="_blank">
                  <i class="el-icon-location-outline"></i>
                </a>
              </h3>
              <p>KKday 研發部門 : 新事業開發組 - 前端工程師,</p>
              <p class="mb-0">主要負責為公司新開發的業務項目撰寫前台服務頁面, 約莫參與 9 個服務頁面的開發/維運,</p>
              <p>如: 全球租車、歐洲鐵路、台灣高鐵、中港通巴士、韓國機票等交通票券及租車訂購服務。</p>
              <p class="mb-0">針對現有的已上線服務進行邏輯重構、目錄遷移、持續優化專案內容( 如: 模組化、命名語意、函式通用性優化等 )</p>
              <p>獨立負責使用 vue 3 開發交通服務行銷後台上架頁面、撰寫相關文件提供給團隊成員日後接手維運可作為參閱所使用, </p>
              <p class="mb-0">常態為進行多人協作開發, 與團隊成員間保持開發進度的同步及溝通方面的暢通</p>
              <p class="mb-0">注重專案程式碼內容具高度的可維護性、擴充性、以及邏輯運行的穩定性,</p>
              <p>同時也提出並落實撰寫團隊開發項目之對應 jest unit testing、測試覆蓋率目標與技術說明文件。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="Feb 2023" placement="top">
            <el-card>
              <h3>統智科技股份有限公司 —— Front-end Developer
                <a href="https://www.ptc-nec.com.tw/" target="_blank">
                  <i class="el-icon-location-outline"></i>
                </a>
              </h3>
              <p>物流解決方案課 - 前端工程師,</p>
              <p class="mb-0">負責單位新業務與既有業務專案之前端開發任務,</p>
              <p class="mb-0">主要負責專案項目包含: 物流智能路徑規劃系統、企業資產維修管理系統、統一超商區顧問訪店數位化等專案,</p>
              <p>另外需負責參與前端架構規劃、提供設計建議、工時評估與控管、開發、維護、測試與部署等工作項目。</p>
              <p class="mb-0">協助單位將專案導入 CI/CD、自動化測試、源碼掃描等技術架構, 並提供實作成果報告與流程文件來協助其他專案同仁共同執行,</p>
              <p class="mb-0">參與其他技術類型專案之支援工作, 如:.NET Core Web API Server、Cordova APP 等技術語言專案、</p>
              <p>兼任「企業資產維修管理系統」PM、協助與指導其他 MVC 專案同仁的前端維護技術課題。</p>
              <p class="mb-0">目前已高度並全面使用 Vue 3 Composition API 與 TypeScript 進行日常開發,</p>
              <p class="mb-0">可獨立撰寫高度客製化與規格嚴謹的自定義共通、業務元件,</p>
              <p class="mb-0">並具備大量數據效能處理能力、擴展性、可讀性、可維護性等設計考量,</p>
              <p>設計及撰寫具有企業需求規格的前端系統操作架構。</p>
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
