<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="iscoll">
          <el-button v-show="isCollapse == true" @click="ExpandClick" type="text"  size="large">
            <IconSVG iconClass="icon-zhankai" />
          </el-button>
          <el-button v-show="isCollapse == false"  @click="FoldClick " type="text" size="large">
            <IconSVG iconClass="icon-guanbi" />
          </el-button>
        </div>
      </el-col>
      <el-col :span="12"> </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMain } from '@/store'

const store = useMain()
const { isCollapse } = storeToRefs(store)
const { setisCollapse } = store

/**
 * @param FoldClick 点击关闭
 * @param setisCollapse 修改store值的方法
 */
const FoldClick = () => {
  setisCollapse(true)
}

/**
 *
 */
const ExpandClick = () => {
  setisCollapse(false)
}
</script>

<style scoped>
.iscoll {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.iscoll :deep(.el-button) {
  margin-left: 5px;
  padding: 10px;
  font-size: 20px;
}
</style>