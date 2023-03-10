<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <LayoutAside></LayoutAside>
      </el-aside>
      <el-container>
        <el-header>
          <LayoutHeader></LayoutHeader>
        </el-header>
        <el-main>
          <LayoutMain></LayoutMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import LayoutMain from "@/layout/LayoutMain/index.vue";
import LayoutHeader from "@/layout/LayoutHeader/index.vue";
import LayoutAside from "@/layout/LayoutAside/index.vue";
</script>

<style lang="scss" scoped>
:deep(.el-aside){
  height: 100vh;
}
:deep(.el-main) {
  --el-main-padding: 0px;
  background-color: #f0f2f5;
}
:deep(.el-header) {
  --el-header-height: 50px;
  --el-header-padding: 0;
}
</style>
