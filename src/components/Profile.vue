<template>
  <div class="container-fluid" style="padding: 80px 0px">
    <div class="row justify-content-center">
      <div class="col-10 col-md-4 col-xxxl-3 mb-3 mb-md-0 d-flex align-items-center">
        <div class="profile-bg w-100 radius-4"
        :class="{'opacity-animation-left': scrollTop > 0}"></div>
      </div>
      <div class="profile-content
      col-12 col-md-6 col-xxxl-4 p-5 d-flex flex-column justify-content-center"
      :class="{'opacity-animation-right': scrollTop > 0}">
        <h2 class="profile-title">
          My passion and focus is <br>front-end web development.
        </h2>
        <el-divider></el-divider>
        <div class="fz-14">
          <p>Hsueh-Han, Chen ——</p>
          <p>
            我是一位極富熱忱與時刻保持專注的前端開發者,<br>
            重視技術成長更是大於其它事物,<br>
            <!-- 當您瀏覽到此處的同時, 也是我踏上這條旅途的第 <span>{{day}}</span> 天,<br> -->
            邏輯思考、理性思維、重視紀律、優雅開發, 是我在工作中的核心理念,<br>
          </p>
          <p>
            我重視具有計畫性的去執行每一項任務與挑戰,<br>
            並且認為嘗試困難的項目才是讓自身獲得巨幅成長的唯一關鍵.
          </p>
          <p class="font-italic mt-5">“ 脫口而出的熱情向來都不太真實，唯有拿出相對的實力才是 ”</p>
          <p class="font-italic indent-16 text-right">—— Hsueh-Han, Dec 2021</p>
          <el-divider></el-divider>
          <p>
            若您也正在尋找優秀事業同仁, 我將隨時等候您的聯繫！
          </p>
          <div class="text-right">
            <button class="quick-contact-btn"
            @click="toContact('contactSection')">
              Quick contact <span class="profile-arrow-icon"><i class="el-icon-right"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['anchorData', 'enterScreen', 'scrollTop'],
  data() {
    return {
      day: null,
      isShow: true,
    };
  },
  mounted() {
    const date = Date.parse('2020-01-13');
    const dateNow = Date.now();
    this.day = Math.floor((dateNow - date) / 24 / 3600 / 1000);
  },
  methods: {
    toContact(target) {
      this.anchorData.forEach((item) => {
        if (item.section === target) {
          const screenContainer = document.querySelector('#screen-container');
          screenContainer.scrollTo({
            behavior: 'smooth',
            top: item.offsetAnchor + this.enterScreen,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
  .profile-bg{
    opacity: 0;
    transform: translateX(20px);
    height: 500px;
    background-image: url('../assets/img/profile-1.jpg');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
  }
  .profile-bg.opacity-animation-left{
    transition: all 1.5s;
    opacity: 1;
    transform: translateX(0px);
  }
  .profile-content{
    opacity: 0;
    transform: translateX(-20px);
  }
  .profile-content.opacity-animation-right{
    transition: all 1.5s;
    transition-delay: 0.6s;
    opacity: 1;
    transform: translateX(0px);
  }
  .profile-title{
    line-height: 1.2;
    font-family: Didot, serif;
    font-size: 25px;
    @media (min-width: 768px) {
      font-size: 30px;
    }
  }
  .quick-contact-btn{
    text-align: left;
    width: 125px;
    display: inline-block;
    font-size: 12px;
    padding: 8px 0px 8px 15px;
    background: transparent;
    color: rgb(9, 139, 214);
    border: 1px solid rgb(9, 139, 214);
    &:hover{
      color: rgb(160, 160, 149);
      border: 1px solid rgb(160, 160, 149);
    }
  }
  .profile-arrow-icon{
    animation: arrow-ml 3s infinite;
  }
  @keyframes arrow-ml {
    0% {
      margin-left: 0;
    }
    50% {
      margin-left: 10px;
    }
    100%{
      margin-left: 0;
    }
  }
</style>
