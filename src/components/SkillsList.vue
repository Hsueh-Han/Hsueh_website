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
          skill: 'Vue',
          score: 4.5,
          describe: [
            'Vuex、Router、Composition API、Vue-transition',
          ],
        },
        {
          skill: 'JavaScript',
          score: 4.5,
          describe: [
            'Events、Prototype、AJAX、ES6、Async/Await、Axios interceptors',
          ],
        },
        {
          skill: 'TypeScript',
          score: 4.5,
          describe: ['Generics、Intersection、Type Assertion'],
        },
        {
          skill: 'Jest',
          score: 4.5,
          describe: ['Vue utils test、JavaScript unit testing'],
        },
        {
          skill: 'CSS 3 / SASS / SCSS',
          score: 4.5,
          describe: ['BEM、RWD、Animation。'],
        },
        {
          skill: 'Nuxt.js',
          score: 4,
          describe: [],
        },
        {
          skill: '.NET Core',
          score: 3,
          describe: [],
        },
        {
          skill: 'jQuery',
          score: 3,
          describe: [],
        },
        {
          skill: 'Node.js',
          score: 2.5,
          describe: [],
        },
      ],
    };
  },
};
</script>
