import request from "@/api"
import type { RowItem, ReturnValue } from "@/api/types/userModel"

export const getUserList = (params: RowItem) => {
  return request.post<ReturnValue>("/mock/api/getUserList", params)
}
