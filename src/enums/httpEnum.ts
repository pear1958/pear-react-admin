export enum httpResEnum {
  SUCCESS = 200,
  OVERDUE = 401,
  TIMEOUT = 10000
}

export enum REQUEST_CODE {
  NO_SUCCESS = -1, // 表示请求成功，但操作未成功
  SUCCESS = 200, // 表示请求成功
  BAD_REQUEST = 400, // 表示客户端发送的请求有错误
  UNAUTHORIZED = 401, // 表示客户端未提供身份验证凭据或身份验证凭据不正确
  NOT_FOUND = 404, // 表示服务器无法找到请求的资源
  INTERNAL_SERVER_ERROR = 500 // 表示服务器内部错误
}
