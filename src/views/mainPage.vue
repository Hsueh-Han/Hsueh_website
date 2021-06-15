<template>
  <div class="position-relative vh-100 index-bg-img-cover"
  style="overflow: hidden; overflow-y: auto;"
  @scroll="scrollAnchor" id="screen-container"
  :class="{ 'index-bg-img': scrollTop <= enterScreenHeight,
            'index-bg-img-second': scrollTop > enterScreenHeight, }">
    <div class="sidebar-wrap"
      :class="{ 'sidebar-wrap-position-fixed': scrollTop >= enterScreenHeight,
                'sidebar-wrap-position-absolute': scrollTop < enterScreenHeight, }">
      <SideBar :anchorData="scrollData" :enterScreen="enterScreenHeight" :current="currentSection"/>
    </div>
    <div class="position-absolute w-100" style="top: 0;">
      <div class=" w-100 vh-100" style=" background-color: rgba(0, 0, 0, 0.5)">
        <EnterScreen :anchorData="scrollData" :enterScreen="enterScreenHeight"/>
      </div>
      <div class="bg-white" id="profile" ref="profileSection">
        <Profile :scrollTop="scrollTop" :anchorData="scrollData" :enterScreen="enterScreenHeight" />
      </div>
      <div class="text-white" style="background: rgb(207, 196, 182);" ref="expSection">
        <ExpSkill />
      </div>
      <div class="text-white" style=" background-color: rgba(0, 0, 0, 0.35)"
      ref="projectSection"
      id="#project">
        <Projects />
      </div>
      <div class="bg-white" ref="contactSection">
        <Contact v-if="scrollData.length > 0" :scrollTop="scrollTop" :anchorData="scrollData"/>
      </div>
      <div class="text-white p-5 ff-mono" style="background-color: #6d5b5b;">
        <p class="fz-12 text-center mb-0"> Design &amp; Development by Hsueh-Han Chen, 2021</p>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import EnterScreen from '@/components/EnterScreen.vue';
import Profile from '@/components/Profile.vue';
import ExpSkill from '@/components/ExpSkill.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

export default {
  components: {
    EnterScreen,
    SideBar,
    Profile,
    ExpSkill,
    Projects,
    Contact,
  },
  data() {
    return {
      enterScreenHeight: null,
      scrollHeight: null,
      scrollTop: 0,
      scrollData: [],
      currentSection: 'profileSection',
    };
  },
  mounted() {
    this.enterScreenHeight = document.querySelector('#screen-container').offsetHeight;
    this.scrollHeight = document.querySelector('#screen-container').scrollHeight;
    const refList = Object.keys(this.$refs);
    refList.forEach((item, index) => {
      const obj = {
        section: item,
        index,
        offsetAnchor: this.$refs[item].offsetTop - this.enterScreenHeight,
      };
      this.scrollData.push(obj);
    });
  },
  methods: {
    scrollAnchor(event) {
      this.scrollTop = event.target.scrollTop;
      if (event.target.scrollTop === 0) {
        this.currentSection = 'profileSection';
      } else if (event.target.scrollTop > 0
      && this.enterScreenHeight + this.scrollTop === this.scrollHeight) {
        this.currentSection = 'contactSection';
      } else if (event.target.scrollTop > 0
      && this.enterScreenHeight + this.scrollTop !== this.scrollHeight) {
        this.scrollData.forEach((item) => {
          if (event.target.scrollTop - this.enterScreenHeight >= item.offsetAnchor) {
            this.currentSection = item.section;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
  .index-bg-img{
    background-image: url('../assets/img/photo-1.jpeg');
  }
  .index-bg-img-second{
    background-image: url('../assets/img/photo-2.jpeg');
  }
  .index-bg-img-cover{
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
  }
  .sidebar-wrap{
    z-index: 1000;
  }
  .sidebar-wrap-position-absolute{
    position: absolute;
     top: 101%;
     right: 20px;
  }
  .sidebar-wrap-position-fixed{
    position: fixed;
     top: 50px;
     right: 20px;
  }
</style>
