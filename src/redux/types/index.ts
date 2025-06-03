interface User {
  id: number
  name: string
  online: boolean
  salary?: number
}

interface Engine {
  name: string
  type: string
}

export interface DeviceState {
  users: User[]
  engineList: Engine[]
}
