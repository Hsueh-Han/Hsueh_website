<template>
  <div>
    <el-card v-for="(item, index) in skillData" :key="index"
    class="mb-3" shadow="always" :body-style="{ padding: '10px' }">
      <div class="d-flex justify-content-between align-items-end px-3">
        <h4 class="mb-0">{{item.skill}}</h4>
        <el-rate style="width: 150px;"
          v-model="item.score"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </div>
      <el-divider class="my-2" v-if="item.describe.length > 0"></el-divider>
      <div class="pl-2 fz-14" v-if="item.describe.length > 0">
        <p class="mb-1" v-for="(text, key) in item.describe" :key="key">
          {{text}}
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillData: [
        {
          skill: 'Bootstrap (v4)',
          score: 5,
          describe: [],
        },
        {
          skill: 'Element UI',
          score: 5,
          describe: [],
        },
        {
          skill: 'Chart.js (v2)',
          score: 5,
          describe: [],
        },
        {
          skill: 'Vue-i18n',
          score: 4.5,
          describe: [],
        },
        {
          skill: 'Vee-validate',
          score: 4.5,
          describe: [],
        },
        {
          skill: 'D3.js (v5)',
          score: 3.5,
          describe: [],
        },
      ],
    };
  },
};
</script>
