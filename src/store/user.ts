import { defineStore } from "pinia"

// defineStore 第一个参数是id，必需且值唯一
export const useUserStore = defineStore("user", {
  //state返回一个函数，防止作用域污染
  state: () => {
    return {
      userInfo: {
        name: "ls",
        age: 18
      }
    }
  },
  getters: {
    newName: (state) => state.userInfo.name + "vip"
  },
  actions: {
    //更新整个对象
    updateUserInfo(userInfo: { name: string; age: number }) {
      this.userInfo = userInfo
    },
    //更新对象中某个属性
    updateAge(age: number) {
      this.userInfo.age = age
    }
  }
})
