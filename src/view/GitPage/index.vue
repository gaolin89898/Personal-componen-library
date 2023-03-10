<template>
  <div>
    <el-button>GitPage</el-button>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { onMounted } from "vue";

const token = process.env.VUE_APP_GITHUB_TOKEN;
const headers = { Authorization: `token ${token}` };
onMounted(() => {
  axios
    .get("https://api.github.com/user", { headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
