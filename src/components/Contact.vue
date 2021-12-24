<template>
  <div class="container-fluid py-5">
    <div class="row justify-content-center py-4">
      <div class="col-12 col-md-8 col-lg-9 col-xxxl-9">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-7 col-xxxl-6 mb-5 mb-xl-0">
            <div class="contact-input-group p-3 shadow position-relative mail-animation"
            :class="{'opacity-animation-top': scrollTop >= anchorData[3].offsetAnchor || isOpened}">
              <div v-if="mailLoading"
              class="mail-loading d-flex align-items-center justify-content-center">
                <h4 class="text-white text-center" v-if="!successText">
                  <i class="el-icon-loading"></i>
                  <span class="ml-2">正在為您寄出信件 ⋯⋯</span>
                </h4>
                <h4 class="text-white text-center" v-if="successText">
                  <span class="text-warning"><i class="el-icon-circle-check"></i></span>
                  <span class="ml-2">信件成功寄出！將會儘速給予您回覆！</span>
                </h4>
              </div>
              <h2 class="contact-title text-white">Contact</h2>
              <el-divider class="contact-el-divider"></el-divider>
              <ValidationObserver v-slot="{handleSubmit}">
                <ValidationProvider rules="required|alpha_num" mode="passive"
                v-slot="{errors, classes}" name="名稱">
                  <el-input class="mb-3 w-50" v-model="mailData.name" clearable :class="classes"
                  placeholder="公司名稱或您的大名"></el-input>
                  <span class="text-danger fz-14 ml-2" v-if="errors[0]">
                    <i class="el-icon-warning-outline mr-1"></i>{{errors[0]}}
                  </span>
                </ValidationProvider>
                <ValidationProvider rules="required|email" mode="passive"
                v-slot="{errors, classes}" name="E-mail">
                  <el-input v-model="mailData.email" :class="classes"
                  clearable placeholder="E-mail 信箱"></el-input>
                  <div style="height: 20px">
                    <span class="text-danger fz-14" v-if="errors[0]">
                      <i class="el-icon-warning-outline mr-1"></i>{{errors[0]}}
                    </span>
                  </div>
                </ValidationProvider>
                <el-divider class="contact-el-divider"></el-divider>
                <ValidationProvider rules="required" mode="passive"
                v-slot="{errors, classes}" name="信件主旨">
                  <el-input v-model="mailData.title" :class="classes"
                  clearable placeholder="主旨"></el-input>
                  <div class="mb-2" style="height: 20px">
                    <span class="text-danger fz-14" v-if="errors[0]">
                      <i class="el-icon-warning-outline mr-1"></i>{{errors[0]}}
                    </span>
                  </div>
                </ValidationProvider>
                <ValidationProvider rules="required" mode="passive"
                v-slot="{errors, classes}" name="信件內容">
                  <el-input :class="classes"
                    type="textarea"
                    resize="none"
                    placeholder="您的寶貴訊息"
                    rows="8"
                    v-model="mailData.text">
                  </el-input>
                  <div style="height: 20px">
                    <span class="text-danger fz-14" v-if="errors[0]">
                      <i class="el-icon-warning-outline mr-1"></i>{{errors[0]}}
                    </span>
                  </div>
                </ValidationProvider>
                <el-button class="ml-auto d-block contact-btn" plain
                @click="handleSubmit(mailSubmit)">
                  送出信件
                </el-button>
              </ValidationObserver>
            </div>
          </div>
          <div class="col-12 col-xl-4">
            <div class="shadow p-3 other-contact-bg other-contact-animation"
            :class="{'opacity-animation-right':
            scrollTop >= anchorData[3].offsetAnchor || isOpened}">
              <div class="p-4" style="background: rgba(255, 255, 255, 0.5)">
                <h2 class="mb-0 contact-title">Other contact information.</h2>
                <el-divider></el-divider>
                <p>Location: Taiwan, Taipei City.</p>
                <p>E-mail: cookie5year@gmail.com</p>
                <p>Line-id: aviku</p>
                <p>GitHub:
                  <a href="https://github.com/Hsueh-Han"
                  target="_blank"> link <i class="el-icon-link"></i></a>
                </p>
                <!-- <p>yourator:
                  <a href="https://www.yourator.co/r/871835ef-b4fb-45d9-989e-8c554e1e9488"
                  target="_blank"> link <i class="el-icon-link"></i></a>
                </p> -->
                <p>104:
                  <a href="https://pda.104.com.tw/profile/share/jHEe6j3kfL9cynvWAuQRBkyWeIofC3Qp"
                  target="_blank"> link <i class="el-icon-link"></i></a>
                </p>
                <el-divider></el-divider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['anchorData', 'scrollTop'],
  data() {
    return {
      mailLoading: false,
      successText: false,
      isOpened: false,
      mailData: {
      },
    };
  },
  watch: {
    scrollTop() {
      if (this.scrollTop >= this.anchorData[3].offsetAnchor) {
        this.isOpened = true;
      } else if (this.scrollTop === 0) {
        this.isOpened = false;
      }
    },
  },
  methods: {
    mailSubmit() {
      this.mailLoading = true;
      const obj = { ...this.mailData };
      this.axios.post('https://fast-basin-06150.herokuapp.com/contact', obj)
        .then((res) => {
          if (res.status === 200) {
            this.successText = true;
            setTimeout(() => {
              this.mailLoading = false;
              this.successText = false;
              this.mailData = {};
            }, 20000);
          }
        });
    },
  },
};
</script>

<style lang="scss">
  .contact-title{
    text-align: center;
    font-size: 28px;
    font-family: Didot, serif;
  }
  .contact-input-group{
    background: rgb(226, 221, 218);
    .el-input__inner, .el-textarea__inner{
      border-radius: 0px;
    }
    .el-input__inner:focus, .el-textarea__inner:focus{
      border-color: rgb(243, 224, 204);
    }
  }
  .contact-btn.el-button{
    border-radius: 0px;
    font-weight: 200;
  }
  .contact-btn.el-button:hover, .contact-btn.el-button:focus{
    font-weight: 500;
    color: rgb(240, 192, 141);
    border-color: rgb(240, 192, 141);
  }
  .contact-el-divider{
    background-color: #fff;
  }
  .in-valid{
    .el-input__inner, .el-input__inner:focus,.el-textarea__inner , .el-textarea__inner:focus{
      border-color: red;
    }
  }
  .mail-loading{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 990;
    background: rgba(0, 0, 0, 0.5);
  }
  .other-contact-bg{
    background: url('../assets/img/photo-3.jpeg') no-repeat center center;
    background-size: cover;
  }
  .mail-animation{
    opacity: 0;
    transform: translateY(-30px);
    &.opacity-animation-top{
      transition: all 1s;
      opacity: 1;
      transform: translateY(0px);
    }
  }
  .other-contact-animation{
    opacity: 0;
    transform: translateX(30px);
    &.opacity-animation-right{
      transition: all 1.25s;
      transition-delay: 0.75s;
      opacity: 1;
      transform: translateX(0px);
    }
  }
</style>
