import { MockMethod } from "vite-plugin-mock"

export default [
  {
    url: "/mock/api/getUserList",
    method: "post",
    response: (res) => {
      return {
        code: 200,
        msg: "success",
        data: {
          list: [res.body],
          page: 1,
          pageSize: 20,
          total: 1
        }
      }
    }
  }
] as MockMethod[]
