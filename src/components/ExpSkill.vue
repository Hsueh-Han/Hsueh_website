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
              <p>課程內容：...</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="Oct 2020" placement="top">
            <el-card>
              <h3>Another starting point —— Graduated from Hex School</h3>
              <p>期間作為：...</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="Jan 2021" placement="top">
            <el-card>
              <h3>Taiwan Data Science Co. —— Front-end Developer
                <a href="https://www.tdsc.com.tw/" target="_blank">
                  <i class="el-icon-location-outline"></i>
                </a>
              </h3>
              <p>工作項目...</p>
              <p>期間習得工具...</p>
              <p>專案常用套件...</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item class="now-point" timestamp="Now" placement="top"
          color="rgb(62, 115, 194)">
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    <div class="row justify-content-center bg-white py-5">
      <div class="col-12 col-md-8 col-lg-9 col-xxxl-7 text-dark">
        <h2 class="skill-title mb-4">
          <span class="mr-2">Skills</span>
          <el-popover
            width="300"
            trigger="hover"
            content="參考：「使用頻率、掌握度、深入程度」進行平均。">
            <span slot="reference" class="fz-16 cursor-pointer">
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
    font-family: cursive;
  }
  .now-point .el-timeline-item__wrapper .is-top{
    font-weight: 600;
    font-size: 16px;
    color: rgb(62, 115, 194);
  }
</style>
