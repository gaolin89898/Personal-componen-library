<template>
    <div>
      <div v-for="(item, index) in menu" :key="index" class="layout">
        <el-menu
          active-text-color="#ffffff"
          background-color="#393D4E"
          text-color="#ffffff"
          :router="true"
          :default-active="menurl"
          :collapse-transition="false"
        >
          <template v-for="v in item.children" :key="v">
            <el-menu-item :index="v.path">
              <SvgIcon :iconName="v.meta?.icon"></SvgIcon>
              <span>{{ v.meta?.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  /**
   * @param menu 获取路由菜单
   */
  const menu = useRouter().options.routes
  
  const url = ref(window.location.pathname)
  const menurl = ref(url.value)
  </script>
  
  <style lang="scss" scoped>
  .layout :deep(.el-menu) {
    height: 100vh;
  }
  
  .layout :deep(.el-menu-item) {
    display: flex;
    align-items: center;
  }
  
  .layout :deep(.el-menu-item) span {
    font-size: 15px;
    padding-left: 10px;
  }
  
  .layout :deep(.el-menu-item.is-active) {
    background-color: #545c64;
  }
  </style>