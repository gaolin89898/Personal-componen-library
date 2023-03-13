<template>
  <div>
    <el-menu
      active-text-color="#ffffff"
      background-color="#393D4E"
      text-color="#ffffff"
      :router="true"
      :default-active="$route.path"
      v-for="(item, index) in menu"
      :key="index"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <el-menu-item v-for="v in item.children" :index="v.path">
        <el-icon> <IconSVG :iconClass="String(v.meta?.icon)" /></el-icon>
        <template #title>{{ v.meta?.title }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { useMain } from '@/store'
import { storeToRefs } from 'pinia'
/**
 * @param menu 获取路由菜单
 */
const menu = useRouter().options.routes;
const store = useMain()
const { isCollapse } = storeToRefs(store)

</script>

<style lang="scss" scoped>
:deep(.el-menu) {
  height: 100vh;
}

.layout :deep(.el-menu-item) {
  display: flex;
  align-items: center;
}

:deep(.el-menu-item) span {
  font-size: 15px;
  padding-left: 10px;
}

:deep(.el-menu-item.is-active) {
  background-color: #545c64;
}
</style>
