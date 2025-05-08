export const menuList = [
  {
    path: '/home',
    name: 'home',
    component: '/home/index',
    meta: {
      title: '首页',
      icon: 'ep:home-filled'
    }
  },
  {
    path: '/components',
    redirect: '/components/upload',
    meta: {
      title: '常用组件',
      icon: 'ep:menu'
    },
    children: [
      {
        path: '/components/jsonForm',
        name: 'jsonForm',
        component: '/components/jsonForm/index',
        meta: {
          title: 'jsonForm'
        }
      },
      {
        path: '/components/jsonTable',
        name: 'jsonTable',
        component: '/components/jsonTable/index',
        meta: {
          title: 'jsonTable'
        }
      },
      {
        path: '/components/jsxDialog',
        name: 'jsxDialog',
        component: '/components/jsxDialog',
        meta: {
          title: 'jsxDialog'
        }
      },
      {
        path: '/components/upload',
        name: 'upload',
        component: '/components/upload',
        meta: {
          title: '图片上传(支持裁剪)'
        }
      },
      {
        path: '/components/area',
        name: 'area',
        component: '/components/area',
        meta: {
          title: '省市区选择(接口数据)'
        }
      },
      {
        path: '/components/progress',
        name: 'progress',
        component: '/components/progress',
        meta: {
          title: 'Progress动画'
        }
      },
      {
        path: '/components/chooseArea',
        name: 'chooseArea',
        component: '/components/chooseArea',
        meta: {
          title: '省市区选择(前端数据)'
        }
      },
      {
        path: '/components/wangEditor',
        name: 'wangEditor',
        component: '/components/wangEditor',
        meta: {
          title: '富文本编辑器'
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
            name: 'MapAddrDrawer',
            component: '/map/aMap/mapAddrDrawer',
            meta: {
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
            name: 'EChartsMapBase',
            component: '/map/echarts/base/index',
            meta: {
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
        name: 'EChartsBase',
        component: '/echarts/base/index',
        meta: {
          title: '基本使用'
        }
      },
      {
        path: '/echarts/theme',
        name: 'EChartsTheme',
        component: '/echarts/theme/index',
        meta: {
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
        name: 'Drawer',
        component: '/ui/drawer',
        meta: {
          title: '抽屉'
        }
      },
      {
        path: '/ui/tabs',
        name: 'Tabs',
        component: '/ui/tabs',
        meta: {
          title: '标签页'
        }
      },
      {
        path: '/ui/dialog',
        name: 'Dialog',
        component: '/ui/dialog',
        meta: {
          title: '对话框'
        }
      },
      {
        path: '/ui/collapse',
        name: 'Collapse',
        component: '/ui/collapse',
        meta: {
          title: '折叠面板'
        }
      },
      {
        path: '/ui/upload',
        name: 'Upload',
        component: '/ui/upload',
        meta: {
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
        name: 'canvasPage',
        component: '/able/canvas/index',
        meta: {
          title: 'canvas'
        }
      },
      {
        path: '/able/table',
        name: 'infiniteScrollTable',
        component: '/able/infiniteScroll',
        meta: {
          title: '表格无限滚动'
        }
      },
      {
        path: '/able/contextMenu',
        name: 'contextMenu',
        component: '/able/contextMenu',
        meta: {
          title: '右键菜单'
        }
      },
      {
        path: '/able/fileDownload',
        name: 'fileDownload',
        component: '/able/fileDownload',
        meta: {
          title: '文件下载'
        }
      },
      {
        path: '/able/waterMark',
        name: 'waterMark',
        component: '/able/waterMark',
        meta: {
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
      {
        path: '/systemManage/account',
        name: 'systemManageAccount',
        component: '/systemManage/account/index',
        meta: {
          title: '账号管理'
        },
        children: [
          {
            path: '/systemManage/account/page1',
            name: 'systemManageAccountPage1',
            component: '/systemManage/account/childs/page1',
            meta: {
              title: '子页面1',
              showInMenu: false
            },
            children: [
              {
                path: '/systemManage/account/pageOuter',
                name: 'systemManageAccountPageOuter',
                component: '/systemManage/account/childs/pageOuter',
                meta: {
                  title: '嵌套最外层子页面-Outer',
                  showInMenu: false
                }
              }
            ]
          }
        ]
      },
      {
        path: '/systemManage/user',
        name: 'systemManageUser',
        component: '/systemManage/user/index',
        meta: {
          title: '用户管理'
        }
      },
      {
        path: '/systemManage/role',
        name: 'systemManageRole',
        component: '/systemManage/role/index',
        meta: {
          title: '角色管理'
        }
      },
      {
        path: '/systemManage/menu',
        name: 'systemManageMenu',
        component: '/systemManage/menu/index',
        meta: {
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
        name: 'menu1',
        component: '/menu/menu1/index',
        meta: {
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
            name: 'menu21',
            component: '/menu/menu2/menu21/index',
            meta: {
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
                name: 'menu221',
                component: '/menu/menu2/menu22/menu221/index',
                meta: {
                  title: '菜单2-2-1'
                }
              },
              {
                path: '/menu/menu2/menu22/menu222',
                name: 'menu222',
                component: '/menu/menu2/menu22/menu222/index',
                meta: {
                  title: '菜单2-2-2'
                }
              }
            ]
          },
          {
            path: '/menu/menu2/menu23',
            name: 'menu23',
            component: '/menu/menu2/menu23/index',
            meta: {
              title: '菜单2-3'
            }
          }
        ]
      },
      {
        path: '/menu/menu3',
        name: 'menu3',
        component: '/menu/menu3/index',
        meta: {
          title: '菜单3'
        }
      }
    ]
  },
  {
    path: '/error',
    redirect: '/error/403',
    meta: {
      title: '错误页面',
      icon: 'ri:information-line'
    },
    children: [
      {
        path: '/error/403',
        name: 'Error403',
        component: '/error/403',
        meta: {
          title: '403'
        }
      },
      {
        path: '/error/404',
        name: 'Error404',
        component: '/error/404',
        meta: {
          title: '404'
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
        name: 'vue',
        component: '/iframeView',
        meta: {
          title: 'Vue官方文档 ( 内嵌 )',
          iframeSrc: 'https://cn.vuejs.org/guide/introduction.html',
          mainFull: true
        }
      },
      {
        path: '/link/bing',
        name: 'bing',
        component: '/iframeView',
        meta: {
          title: '必应 ( 内嵌 )',
          iframeSrc: 'https://cn.bing.com/',
          mainFull: true
        }
      },
      {
        path: '/link/checkPdf',
        name: 'linkCheckPdf',
        component: '/iframeView',
        meta: {
          title: '查看PDF ( 内嵌 )',
          iframeSrc: 'http://static.shanhuxueyuan.com/test.pdf',
          mainFull: true
        }
      },
      {
        path: '/link/baidu',
        name: 'baidu',
        meta: {
          title: '百度 ( 外链 )',
          link: 'https://www.baidu.com'
        }
      }
    ]
  }
]
