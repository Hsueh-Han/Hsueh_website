<template>
  <div class="container-fluid h-100 position-relative">
    <div class="row enter-font-family h-100 justify-content-center align-items-center">
      <div class="col-10 col-lg-8 col-xxl-6 col-xxxl-5 p-4 text-center">
        <transition name="opacity-1">
          <h1 v-show="isShow" class="enter-title">HSUEH</h1>
        </transition>
        <transition name="opacity-2">
          <h2 v-show="isShow"
          class="enter-title mb-5">Learning is an endless journey.</h2>
        </transition>
        <div class="w-75 mx-auto mb-2">
          <transition name="fade-1">
            <div v-show="isShow" class="border-bottom border-white mx-auto"></div>
          </transition>
        </div>
        <transition name="opacity-3">
          <div class="py-5" v-show="isShow">
            <button class="quick-view-btn"
            @click="toProject('projectSection')">Quick view of my projects
            </button>
          </div>
        </transition>
      </div>
    </div>
    <a class="arrow-btn radius-50 text-center d-block" href="#profile" ref="arrowBtn"
    @click.prevent="toProfile">
      <span class="d-inline-block"><i class="fas fa-chevron-down"></i></span>
    </a>
  </div>
</template>

<script>

export default {
  props: ['anchorData', 'enterScreen'],
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isShow = true;
    }, 500);
  },
  methods: {
    toProfile() {
      const screenContainer = document.querySelector('#screen-container');
      if (window.scrollTo) {
        screenContainer.scrollTo({
          behavior: 'smooth',
          top: document.querySelector(this.$refs.arrowBtn.hash).offsetTop,
        });
      }
    },
    toProject(target) {
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
