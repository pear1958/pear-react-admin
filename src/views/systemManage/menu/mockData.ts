export const menuList = [
  {
    path: '/home',
    element: '/home/index',
    meta: {
      orderNum: 1,
      status: '1',
      show: '1',
      name: 'home',
      title: '首页',
      icon: 'ep:home-filled'
    }
  },
  {
    path: '/components',
    redirect: '/components/jsonForm',
    meta: {
      orderNum: 2,
      status: '1',
      show: '1',
      title: '常用组件',
      icon: 'ep:menu'
    },
    children: [
      {
        path: '/components/jsonForm',
        element: '/components/jsonForm/index',
        meta: {
          orderNum: 1,
          status: '1',
          show: '1',
          name: 'jsonForm',
          title: 'jsonForm'
        }
      },
      {
        path: '/components/jsonTable',
        element: '/components/jsonTable/index',
        meta: {
          orderNum: 2,
          status: '1',
          show: '1',
          name: 'jsonTable',
          title: 'jsonTable'
        }
      },
      {
        path: '/components/customSearchTable',
        element: '/components/customSearchTable/index',
        meta: {
          orderNum: 3,
          status: '1',
          show: '1',
          name: 'customSearchTable',
          title: 'customSearchTable'
        }
      },
      {
        path: '/components/jsxDialog',
        element: '/components/jsxDialog',
        meta: {
          orderNum: 4,
          status: '1',
          show: '1',
          name: 'jsxDialog',
          title: 'jsxDialog'
        }
      },
      {
        path: '/components/upload',
        element: '/components/upload',
        meta: {
          orderNum: 5,
          status: '1',
          show: '1',
          name: 'upload',
          title: '图片上传(支持裁剪)'
        }
      },
      {
        path: '/components/area',
        element: '/components/area',
        meta: {
          orderNum: 6,
          status: '1',
          show: '1',
          name: 'area',
          title: '省市区选择(接口数据)'
        }
      },
      {
        path: '/components/progress',
        element: '/components/progress',
        meta: {
          orderNum: 7,
          status: '1',
          show: '1',
          name: 'progress',
          title: 'Progress动画'
        }
      },
      {
        path: '/components/chooseArea',
        element: '/components/chooseArea',
        meta: {
          orderNum: 8,
          status: '1',
          show: '1',
          name: 'chooseArea',
          title: '省市区选择(前端数据)'
        }
      },
      {
        path: '/components/wangEditor',
        element: '/components/wangEditor',
        meta: {
          orderNum: 9,
          status: '1',
          show: '1',
          name: 'wangEditor',
          title: '富文本编辑器'
        }
      }
    ]
  },
  {
    path: '/smart-city',
    redirect: '/smart-city/area',
    meta: {
      orderNum: 3,
      status: '1',
      show: '1',
      icon: 'ant-design:environment-outlined',
      title: '智慧城市'
    },
    children: [
      {
        path: '/smart-city/area',
        element: '/smartCity/index',
        meta: {
          orderNum: 1,
          status: '1',
          show: '1',
          name: 'SmartArea',
          title: '智慧园区'
        }
      }
    ]
  },
  {
    path: '/map',
    redirect: '/map/ol',
    meta: {
      orderNum: 4,
      status: '1',
      show: '1',
      icon: 'ant-design:environment-outlined',
      title: '地图'
    },
    children: [
      {
        path: '/map/aMap',
        redirect: '/map/aMap/mapAddrDrawer',
        meta: {
          orderNum: 1,
          status: '1',
          show: '1',
          title: '高德地图'
        },
        children: [
          {
            path: '/map/aMap/mapAddrDrawer',
            element: '/map/aMap/mapAddrDrawer',
            meta: {
              orderNum: 1,
              status: '1',
              show: '1',
              name: 'MapAddrDrawer',
              title: '地图选点'
            }
          }
        ]
      },
      {
        path: '/map/echarts',
        redirect: '/map/echarts/base',
        meta: {
          orderNum: 2,
          status: '1',
          show: '1',
          title: 'ECharts地图'
        },
        children: [
          {
            path: '/map/echarts/base',
            element: '/map/echarts/base/index',
            meta: {
              orderNum: 1,
              status: '1',
              show: '1',
              name: 'EChartsMapBase',
              title: '地图',
              mainFull: true
            }
          }
        ]
      }
    ]
  },
  {
    path: '/echarts',
    redirect: '/echarts/base',
    meta: {
      orderNum: 5,
      status: '1',
      show: '1',
      title: 'ECharts图表',
      icon: 'ant-design:area-chart-outlined'
    },
    children: [
      {
        path: '/echarts/base',
        element: '/echarts/base/index',
        meta: {
          orderNum: 1,
          status: '1',
          show: '1',
          name: 'EChartsBase',
          title: '基本使用'
        }
      },
      {
        path: '/echarts/theme',
        element: '/echarts/theme/index',
        meta: {
          orderNum: 2,
          status: '1',
          show: '1',
          name: 'EChartsTheme',
          title: '自定义主题'
        }
      }
    ]
  },
  {
    path: '/ui',
    redirect: '/ui/drawer',
    meta: {
      orderNum: 6,
      status: '1',
      show: '1',
      title: 'UI组件',
      icon: 'ant-design:bulb-outlined'
    },
    children: [
      {
        path: '/ui/drawer',
        element: '/ui/drawer',
        meta: {
          orderNum: 1,
          status: '1',
          show: '1',
          name: 'Drawer',
          title: '抽屉'
        }
      },
      {
        path: '/ui/tabs',
        element: '/ui/tabs',
        meta: {
          orderNum: 2,
          status: '1',
          show: '1',
          name: 'Tabs',
          title: '标签页'
        }
      },
      {
        path: '/ui/dialog',
        element: '/ui/dialog',
        meta: {
          orderNum: 3,
          status: '1',
          show: '1',
          name: 'Dialog',
          title: '对话框'
        }
      },
      {
        path: '/ui/collapse',
        element: '/ui/collapse',
        meta: {
          orderNum: 4,
          status: '1',
          show: '1',
          name: 'Collapse',
          title: '折叠面板'
        }
      },
      {
        path: '/ui/upload',
        element: '/ui/upload',
        meta: {
          orderNum: 5,
          status: '1',
          show: '1',
          name: 'Upload',
          title: '图片上传(自定义)'
        }
      }
    ]
  },
  {
    path: '/able',
    redirect: '/able/table',
    meta: {
      orderNum: 7,
      status: '1',
      show: '1',
      title: '功能',
      icon: 'ri:ubuntu-fill'
    },
    children: [
      {
        path: '/able/canvas',
        element: '/able/canvas/index',
        meta: {
          orderNum: 1,
          status: '1',
          show: '1',
          name: 'canvasPage',
          title: 'canvas'
        }
      },
      {
        path: '/able/table',
        element: '/able/infiniteScroll',
        meta: {
          orderNum: 2,
          status: '1',
          show: '1',
          name: 'infiniteScrollTable',
          title: '表格无限滚动'
        }
      },
      {
        path: '/able/contextMenu',
        element: '/able/contextMenu',
        meta: {
          orderNum: 3,
          status: '1',
          show: '1',
          name: 'contextMenu',
          title: '右键菜单'
        }
      },
      {
        path: '/able/fileDownload',
        element: '/able/fileDownload',
        meta: {
          orderNum: 4,
          status: '1',
          show: '1',
          name: 'fileDownload',
          title: '文件下载'
        }
      },
      {
        path: '/able/waterMark',
        element: '/able/waterMark',
        meta: {
          orderNum: 5,
          status: '1',
          show: '1',
          name: 'waterMark',
          title: '水印'
        }
      }
    ]
  },
  {
    path: '/systemManage',
    redirect: '/systemManage/account',
    meta: {
      orderNum: 8,
      status: '1',
      show: '1',
      title: '系统管理',
      icon: 'ep:setting'
    },
    children: [
      {
        path: '/systemManage/user',
        element: '/systemManage/user/index',
        meta: {
          orderNum: 1,
          status: '1',
          show: '1',
          name: 'systemManageUser',
          title: '用户管理'
        }
      },
      {
        path: '/systemManage/role',
        element: '/systemManage/role/index',
        meta: {
          orderNum: 2,
          status: '1',
          show: '1',
          name: 'systemManageRole',
          title: '角色管理'
        }
      },
      {
        path: '/systemManage/menu',
        element: '/systemManage/menu/index',
        meta: {
          orderNum: 3,
          status: '1',
          show: '1',
          name: 'systemManageMenu',
          title: '菜单管理'
        }
      }
    ]
  },
  {
    path: '/menu',
    redirect: '/menu/menu1',
    meta: {
      orderNum: 9,
      status: '1',
      show: '1',
      icon: 'ep:histogram',
      title: '多级菜单'
    },
    children: [
      {
        path: '/menu/menu1',
        element: '/menu/menu1/index',
        meta: {
          orderNum: 1,
          status: '1',
          show: '1',
          name: 'menu1',
          title: '菜单1'
        }
      },
      {
        path: '/menu/menu2',
        redirect: '/menu/menu2/menu21',
        meta: {
          orderNum: 2,
          status: '1',
          show: '1',
          title: '菜单2'
        },
        children: [
          {
            path: '/menu/menu2/menu21',
            element: '/menu/menu2/menu21/index',
            meta: {
              orderNum: 1,
              status: '1',
              show: '1',
              name: 'menu21',
              title: '菜单2-1'
            }
          },
          {
            path: '/menu/menu2/menu22',
            redirect: '/menu/menu2/menu22/menu221',
            meta: {
              orderNum: 2,
              status: '1',
              show: '1',
              title: '菜单2-2'
            },
            children: [
              {
                path: '/menu/menu2/menu22/menu221',
                element: '/menu/menu2/menu22/menu221/index',
                meta: {
                  orderNum: 1,
                  status: '1',
                  show: '1',
                  name: 'menu221',
                  title: '菜单2-2-1'
                }
              },
              {
                path: '/menu/menu2/menu22/menu222',
                element: '/menu/menu2/menu22/menu222/index',
                meta: {
                  orderNum: 2,
                  status: '1',
                  show: '1',
                  name: 'menu222',
                  title: '菜单2-2-2'
                }
              }
            ]
          },
          {
            path: '/menu/menu2/menu23',
            element: '/menu/menu2/menu23/index',
            meta: {
              orderNum: 1,
              status: '1',
              show: '1',
              name: 'menu23',
              title: '菜单2-3'
            }
          }
        ]
      },
      {
        path: '/menu/menu3',
        element: '/menu/menu3/index',
        meta: {
          orderNum: 3,
          status: '1',
          show: '1',
          name: 'menu3',
          title: '菜单3'
        }
      }
    ]
  },
  {
    path: '/link',
    redirect: '/link/bing',
    meta: {
      orderNum: 10,
      status: '1',
      show: '1',
      title: '外部页面',
      icon: 'ep:monitor'
    },
    children: [
      {
        path: '/link/vue',
        element: '/iframeView',
        meta: {
          orderNum: 1,
          status: '1',
          show: '1',
          name: 'vue',
          title: 'Vue官方文档 ( 内嵌 )',
          iframeSrc: 'https://cn.vuejs.org/guide/introduction.html',
          mainFull: true
        }
      },
      {
        path: '/link/bing',
        element: '/iframeView',
        meta: {
          orderNum: 2,
          status: '1',
          show: '1',
          name: 'bing',
          title: '必应 ( 内嵌 )',
          iframeSrc: 'https://cn.bing.com/',
          mainFull: true
        }
      },
      {
        path: '/link/checkPdf',
        element: '/iframeView',
        meta: {
          orderNum: 3,
          status: '1',
          show: '1',
          name: 'linkCheckPdf',
          title: '查看PDF ( 内嵌 )',
          iframeSrc: 'http://static.shanhuxueyuan.com/test.pdf',
          mainFull: true
        }
      },
      {
        path: '/link/baidu',
        meta: {
          orderNum: 4,
          status: '1',
          show: '1',
          title: '百度 ( 外链 )',
          name: 'baidu',
          link: 'https://www.baidu.com'
        }
      }
    ]
  }
]
