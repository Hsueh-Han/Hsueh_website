<template>
  <div class="bg-white px-1 shadow sidebar-content" :class="{'sidebar-hide': !isSlide}">
    <div class="py-2 text-center border-bottom">
      <p class="mb-0">MENU</p>
      <button class="list-btn" v-if="!isSlide" @click="isSlide = true">
        <i class="el-icon-caret-bottom"></i>
      </button>
    </div>
    <div class="space-wrap mb-1 mt-4" :class="{'active': current === 'profileSection'}"
    @click="toAnchor('profileSection')">
      <div class="space">
        <div class="box"><i class="el-icon-tickets"></i></div>
        <div class="box-2 pt-3 fz-14 shadow">Profile</div>
      </div>
    </div>
    <div class="space-wrap mb-1" :class="{'active': current === 'expSection'}"
    @click="toAnchor('expSection')">
      <div class="space">
        <div class="box"><i class="el-icon-trophy-1"></i></div>
        <div class="box-2 fz-12 pt-2 shadow">Experiences & skills</div>
      </div>
    </div>
    <div class="space-wrap mb-1" :class="{'active': current === 'projectSection'}"
    @click="toAnchor('projectSection')">
      <div class="space">
        <div class="box"><i class="el-icon-collection"></i></div>
        <div class="box-2 pt-3 fz-14  shadow">Projects</div>
      </div>
    </div>
    <div class="space-wrap" :class="{'active': current === 'contactSection'}"
    @click="toAnchor('contactSection')">
      <div class="space">
        <div class="box"><i class="el-icon-chat-line-round"></i></div>
        <div class="box-2 pt-3 fz-14 shadow">Contact</div>
      </div>
    </div>
    <hr class="mt-4">
    <div class="text-center mt-3">
      <a href="https://github.com/Hsueh-Han" target="_blank"
      class="fz-24 text-secondary d-inline-block w-50 lh-1 text-decoration-none">
        <i class="fab fa-github"></i>
        <span class="fz-12">GitHub</span>
      </a>
    </div>
    <div class="text-center mt-3">
      <button class="hide-btn" @click="isSlide = false">
        <span><i class="el-icon-caret-bottom"></i></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['current', 'anchorData', 'enterScreen'],
  data() {
    return {
      isActive: '',
      isSlide: true,
    };
  },
  methods: {
    toAnchor(target) {
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
.sidebar-content{
  font-family: monospace;
  transition: 0.15s height;
  height: 460px;
  &.sidebar-hide{
    height: 65px;
    overflow: hidden;
  }
}
.space-wrap{
  cursor: pointer;
  width:80px;
  height:60px;
  perspective-origin:center center;
  &.active{
    .space{
      transform:rotateX(-90deg);
    }
  }
}
.space{
  position: relative;
  width:100%;
  height:100%;
  transform-style:3d;
  transform-origin: bottom center;
  -webkit-transform-style:preserve-3d;
  transition: 0.3s all;
}
.space div{
  position:absolute;
  width:80px;
  height:60px;
}
.box{
  padding-top: 12px;
  font-size: 25px;
  text-align: center;
  background:rgb(247, 247, 247);
  border-radius: 8px;
}
.box-2{
  border-radius: 8px;
  text-align: center;
  background:rgb(245, 238, 215);
  transform-origin:center top;
  transform:translateX(0px) translateY(0px) translateZ(-60px) rotateX(90deg);
}
.list-btn, .hide-btn{
  font-size: 20px;
  width: 100%;
  height: 30px;
  border-radius: 8px;
  border-radius: 8px;
  background: transparent;
  border-width: 0;
  &:hover{
    color: #ffffff;
    background: rgba(133, 131, 131, 0.25);
    font-weight: 600;
  }
}
.hide-btn:hover span{
  transition: 0.15s transform;
  display: inline-block;
  transform: rotate(-180deg);
}
</style>
