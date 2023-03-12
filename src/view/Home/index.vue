<template>
  <div>
    <ElButton>{{ aaa }}</ElButton>
    <IconSVG iconClass="icon-github" />
    <!-- <el-radio-group v-model="radio1" class="ml-4">
      <el-radio label="1" size="large">Option 1</el-radio>
      <el-radio label="2" size="large">Option 2</el-radio>
    </el-radio-group> -->
  </div>
</template>

<script lang="ts" setup>
const aaa = ref<string>("111");
</script>
