<template>
  <div class="container-fluid py-5">
    <div class="row justify-content-center">
      <div class="col-11">
        <div class="row justify-content-center">
          <div class="col-10 col-lg-6 text-center">
            <h2 class="projects-title mb-0">Projects</h2>
            <p class="mb-0 font-italic">"It is often said that time changes things,</p>
            <p class="mb-0 font-italic">but you actually have to change them on your own."</p>
            <el-divider></el-divider>
          </div>
        </div>
        <div class="row pt-5 justify-content-around">
          <div class="col-8 col-lg-3 mb-5 projects-card project-card-img-1 border border-white">
            <div class="projects-hover-bg p-3 projects-hover-bg-img-1">
              <a href="#/wiad" target="_blank"
              class="projects-content text-dark h-100">
                <div class="h-100 d-flex flex-column p-3 justify-content-center align-items-center">
                  <h2 class="text-warning mb-0"><i class="fas fa-star"></i></h2>
                  <h2 class="text-center mb-0 project-content-title">WiAD 廣告投放平台</h2>
                  <el-divider><i class="el-icon-link"></i></el-divider>
                  <p class="fz-14">WiAD 廣告投放平台<br>正式產品規格的使用者廣告投放後台</p>
                  <p class="fz-14">Vue、Vuex、Element UI、Vee-validate、Chart.js</p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-8 col-lg-3 mt-lg-5 mb-5 projects-card project-card-img-2
          border border-white">
            <div class="projects-hover-bg p-3 projects-hover-bg-img-2">
              <a href="#/wiside" target="_blank"
              class="projects-content text-dark h-100">
                <div class="h-100 d-flex flex-column p-3 justify-content-center align-items-center">
                  <h2 class="text-warning mb-0"><i class="fas fa-star"></i></h2>
                  <h2 class="text-center mb-0 project-content-title">
                    Wiside 數據平台<br>
                    <small>上線中產品</small>
                  </h2>
                  <el-divider><i class="el-icon-link"></i></el-divider>
                  <p class="fz-14">
                    Wireless Signal Detection<br>整合多樣圖表最佳化呈現資料數據
                  </p>
                  <p class="fz-14">Vue、Vuex、Chart.js、D3.js、Element UI</p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-8 col-lg-3 mb-5 projects-card project-card-img-3 border border-white">
            <div class="projects-hover-bg p-3 projects-hover-bg-img-3">
              <a href="https://hsueh-han.github.io/HanShop/" target="_blank"
              class="projects-content text-dark h-100">
                <div class="h-100 d-flex flex-column p-3 justify-content-center align-items-center">
                  <h2 class="text-center mb-0 project-content-title">Sunset Accessory Shop</h2>
                  <el-divider><i class="el-icon-link"></i></el-divider>
                  <p class="fz-14">電商範例作品網站 Demo<br>包含前、後台 API 完整功能實作</p>
                  <p class="fz-14">Vue、Vuex、Bootstrap</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <el-divider class="w-50 mx-auto"></el-divider>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  .projects-title{
    font-size: 2.5rem;
    font-family: Didot, serif;
  }
  .project-content-title{
    font-family: Didot, serif;;
  }
  .projects-card{
    position: relative;
    height: 330px;
    cursor: pointer;
    @media (min-width: 1200px) {
      height: 450px;
    }
    .projects-hover-bg{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      opacity: 0.9;
      transition: 0.3s opacity;
    }
    .projects-content{
      display: block;
      text-decoration: none;
      background: rgba(255, 255, 255, 0.5);
    }
    &:hover .projects-hover-bg{
      opacity: 0;
    }
  }
  .project-card-img-1{
    background: url('../assets/img/wiad/wiad_02.png') no-repeat center center;
    background-size: cover;
  }
  .projects-hover-bg-img-1{
    background: url('../assets/img/photo-3.jpeg') no-repeat top left;
  }
  .project-card-img-2{
    background: url('../assets/img/wiside/immediate.png') no-repeat center center;
    background-size: cover;
  }
  .projects-hover-bg-img-2{
    background: url('../assets/img/photo-3.jpeg') no-repeat top right;
  }
  .project-card-img-3{
    background: url('../assets/img/projects-shop.png') no-repeat top center;
    background-size: cover;
  }
  .projects-hover-bg-img-3{
    background: url('../assets/img/photo-3.jpeg') no-repeat center center;
  }
</style>
