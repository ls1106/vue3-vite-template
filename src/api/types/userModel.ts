export interface RowItem {
  id: number // 唯一id
  name: string // 姓名
  age: number // 年龄
}

// 接口返回的数据类型
export interface ReturnValue {
  list: Array<RowItem>
  page: number
  pageSize: number
  total: number
}
