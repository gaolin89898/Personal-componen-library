<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
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
import { useMain } from "@/store";
import { storeToRefs } from "pinia";
import LayoutMain from "@/layout/LayoutMain/index.vue";
import LayoutHeader from "@/layout/LayoutHeader/index.vue";
import LayoutAside from "@/layout/LayoutAside/index.vue";

const store = useMain();
const { isCollapse } = storeToRefs(store);
</script>

<style lang="scss" scoped>
:deep(.el-aside) {
  height: 100vh;
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
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
