<template>
  <div>
    <el-card style="margin:10px">
      <el-avatar :size="50" :src="circleUrl" />
    </el-card>
    <el-card>
      <el-button>首页</el-button>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const circleUrl='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
</script>

<style lang="scss" scoped>
</style>
