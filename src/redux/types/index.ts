interface User {
  id: number
  name: string
  online: boolean
  salary?: number
}

interface Device {
  name: string
  type: string
}

export interface DeviceState {
  users: User[]
  deviceList: Device[]
}
