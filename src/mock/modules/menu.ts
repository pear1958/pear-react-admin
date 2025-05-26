import { menuList } from '@/views/systemManage/menu/mockData'

export const getMockMenuData = (params: Recordable) => {
  // const mockStatus = ['all', 'open', 'processing', 'closed']
  const { current, pageSize } = params
  const startIndex = (current - 1) / pageSize
  return menuList.slice(startIndex, current * pageSize)

  // return new Array(params.pageSize).fill('').map((_, index) => {
  //   return {
  //     index: index + 1,
  //     id: Math.random(),
  //     menuName: '测试菜单',
  //     status: mockStatus[index] ?? 'all',
  //     introduce:
  //       'https://pro-components.antdigital.dev/components/table?tab=api&current=1&pageSize=5',
  //     individualText:
  //       '路虽远, 行则将至, 的【陪娃尽快安居网【 金达旺【就看到【啊我觉得【【未打卡肯定啊我看到',
  //     created_at: '2025-02-22T00:00:00+0800',
  //     shopId: null,
  //     shopName: '投保测试4S店',
  //     benefitKey: 'SXX_2',
  //     benefitName: '随心修',
  //     vin: Math.random(),
  //     plateNumber: null,
  //     vehicleModel: '奥迪/A3新能源(进口)/2017款 Sportback e-tron 舒适型',
  //     vehicleOwnerPhone: '15848725012',
  //     vehicleOwnerName: '凉凉',
  //     vehicleOwnerIdType: 'ID',
  //     vehicleOwnerIdNo: '431224198912147726',
  //     vehicleRegisterDate: '2025-02-21T00:00:00+0800',
  //     vehiclePurchasePrice: 20,
  //     vehicleInvoiceDate: '2025-02-21T00:00:00+0800',
  //     insureTime: '2025-02-21T13:45:53+0800'
  //   }
  // })
}
