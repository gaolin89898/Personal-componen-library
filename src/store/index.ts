export const useMain = defineStore('useStore', {
  state: () => {
    return {
      isCollapse: false //是否折叠侧边菜单
    }
  },
  getters: {
    getisCollapse(state): boolean {
      return state.isCollapse
    }
  },
  actions: {
    setisCollapse(isCollapse: boolean) {
      this.isCollapse = isCollapse
    }
  }
})