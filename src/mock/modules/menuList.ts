export const menuList = [
  {
    path: '/home',
    element: '/home/index',
    meta: {
      name: 'home',
      title: '首页',
      icon: 'ep:home-filled'
    }
  },
  {
    path: '/components',
    redirect: '/components/jsonForm',
    meta: {
      title: '常用组件',
      icon: 'ep:menu'
    },
    children: [
      {
        path: '/components/jsonForm',
        element: '/components/jsonForm/index',
        meta: {
          name: 'jsonForm',
          title: 'jsonForm'
        }
      },
      {
        path: '/components/jsonTable',
        element: '/components/jsonTable/index',
        meta: {
          name: 'jsonTable',
          title: 'jsonTable'
        }
      },
      {
        path: '/components/customSearchTable',
        element: '/components/customSearchTable/index',
        meta: {
          name: 'customSearchTable',
          title: 'customSearchTable'
        }
      },
      {
        path: '/components/jsxDialog',
        element: '/components/jsxDialog',
        meta: {
          name: 'jsxDialog',
          title: 'jsxDialog'
        }
      },
      {
        path: '/components/upload',
        element: '/components/upload',
        meta: {
          name: 'upload',
          title: '图片上传(支持裁剪)'
        }
      },
      {
        path: '/components/area',
        element: '/components/area',
        meta: {
          name: 'area',
          title: '省市区选择(接口数据)'
        }
      },
      {
        path: '/components/progress',
        element: '/components/progress',
        meta: {
          name: 'progress',
          title: 'Progress动画'
        }
      },
      {
        path: '/components/chooseArea',
        element: '/components/chooseArea',
        meta: {
          name: 'chooseArea',
          title: '省市区选择(前端数据)'
        }
      },
      {
        path: '/components/wangEditor',
        element: '/components/wangEditor',
        meta: {
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
      icon: 'ant-design:environment-outlined',
      title: '智慧城市'
    },
    children: [
      {
        path: '/smart-city/area',
        element: '/smartCity/index',
        meta: {
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
      icon: 'ant-design:environment-outlined',
      title: '地图'
    },
    children: [
      {
        path: '/map/aMap',
        redirect: '/map/aMap/mapAddrDrawer',
        meta: {
          title: '高德地图'
        },
        children: [
          {
            path: '/map/aMap/mapAddrDrawer',
            element: '/map/aMap/mapAddrDrawer',
            meta: {
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
          title: 'ECharts地图'
        },
        children: [
          {
            path: '/map/echarts/base',
            element: '/map/echarts/base/index',
            meta: {
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
      title: 'ECharts图表',
      icon: 'ant-design:area-chart-outlined'
    },
    children: [
      {
        path: '/echarts/base',
        element: '/echarts/base/index',
        meta: {
          name: 'EChartsBase',
          title: '基本使用'
        }
      },
      {
        path: '/echarts/theme',
        element: '/echarts/theme/index',
        meta: {
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
      title: 'UI组件',
      icon: 'ant-design:bulb-outlined'
    },
    children: [
      {
        path: '/ui/drawer',
        element: '/ui/drawer',
        meta: {
          name: 'Drawer',
          title: '抽屉'
        }
      },
      {
        path: '/ui/tabs',
        element: '/ui/tabs',
        meta: {
          name: 'Tabs',
          title: '标签页'
        }
      },
      {
        path: '/ui/dialog',
        element: '/ui/dialog',
        meta: {
          name: 'Dialog',
          title: '对话框'
        }
      },
      {
        path: '/ui/collapse',
        element: '/ui/collapse',
        meta: {
          name: 'Collapse',
          title: '折叠面板'
        }
      },
      {
        path: '/ui/upload',
        element: '/ui/upload',
        meta: {
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
      title: '功能',
      icon: 'ri:ubuntu-fill'
    },
    children: [
      {
        path: '/able/canvas',
        element: '/able/canvas/index',
        meta: {
          name: 'canvasPage',
          title: 'canvas'
        }
      },
      {
        path: '/able/table',
        element: '/able/infiniteScroll',
        meta: {
          name: 'infiniteScrollTable',
          title: '表格无限滚动'
        }
      },
      {
        path: '/able/contextMenu',
        element: '/able/contextMenu',
        meta: {
          name: 'contextMenu',
          title: '右键菜单'
        }
      },
      {
        path: '/able/fileDownload',
        element: '/able/fileDownload',
        meta: {
          name: 'fileDownload',
          title: '文件下载'
        }
      },
      {
        path: '/able/waterMark',
        element: '/able/waterMark',
        meta: {
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
      title: '系统管理',
      icon: 'ep:setting'
    },
    children: [
      // {
      //   path: '/systemManage/account',
      //   element: '/systemManage/account/index',
      //   meta: {
      //     name: 'systemManageAccount',
      //     title: '账号管理'
      //   },
      //   children: [
      //     {
      //       path: '/systemManage/account/page1',
      //       element: '/systemManage/account/childs/page1',
      //       meta: {
      //         name: 'systemManageAccountPage1',
      //         title: '子页面1',
      //         hidden: true
      //       },
      //       children: [
      //         {
      //           path: '/systemManage/account/pageOuter',
      //           element: '/systemManage/account/childs/pageOuter',
      //           meta: {
      //             name: 'systemManageAccountPageOuter',
      //             title: '嵌套最外层子页面-Outer',
      //             hidden: true
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        path: '/systemManage/user',
        element: '/systemManage/user/index',
        meta: {
          name: 'systemManageUser',
          title: '用户管理'
        }
      },
      {
        path: '/systemManage/role',
        element: '/systemManage/role/index',
        meta: {
          name: 'systemManageRole',
          title: '角色管理'
        }
      },
      {
        path: '/systemManage/menu',
        element: '/systemManage/menu/index',
        meta: {
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
      icon: 'ep:histogram',
      title: '多级菜单'
    },
    children: [
      {
        path: '/menu/menu1',
        element: '/menu/menu1/index',
        meta: {
          name: 'menu1',
          title: '菜单1'
        }
      },
      {
        path: '/menu/menu2',
        redirect: '/menu/menu2/menu21',
        meta: {
          title: '菜单2'
        },
        children: [
          {
            path: '/menu/menu2/menu21',
            element: '/menu/menu2/menu21/index',
            meta: {
              name: 'menu21',
              title: '菜单2-1'
            }
          },
          {
            path: '/menu/menu2/menu22',
            redirect: '/menu/menu2/menu22/menu221',
            meta: {
              title: '菜单2-2'
            },
            children: [
              {
                path: '/menu/menu2/menu22/menu221',
                element: '/menu/menu2/menu22/menu221/index',
                meta: {
                  name: 'menu221',
                  title: '菜单2-2-1'
                }
              },
              {
                path: '/menu/menu2/menu22/menu222',
                element: '/menu/menu2/menu22/menu222/index',
                meta: {
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
      title: '外部页面',
      icon: 'ep:monitor'
    },
    children: [
      {
        path: '/link/vue',
        element: '/iframeView',
        meta: {
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
          name: 'linkCheckPdf',
          title: '查看PDF ( 内嵌 )',
          iframeSrc: 'http://static.shanhuxueyuan.com/test.pdf',
          mainFull: true
        }
      },
      {
        path: '/link/baidu',
        meta: {
          title: '百度 ( 外链 )',
          name: 'baidu',
          link: 'https://www.baidu.com'
        }
      }
    ]
  }
]
