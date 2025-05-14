import { useEffect, useMemo, useState } from 'react'
import { Link, useMatches } from 'react-router-dom'
import { Breadcrumb as AntdBreadcrumb } from 'antd'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import classNames from 'classnames'
import { useAuthStore } from '@/store'

const getBreadcrumbMap = (
  menuList: Recordable[],
  parent: Recordable[] = [],
  result: Recordable<Recordable[]> = {}
) => {
  menuList.forEach(item => {
    result[item.meta.name] = [...parent, item]
    if (item.children) getBreadcrumbMap(item.children, result[item.meta.name], result)
  })
  return result
}

const Breadcrumb = ({ className }: Recordable) => {
  const matches = useMatches()
  const authMenuList = useAuthStore(state => state.menuList)
  const [breadcrumbList, setBreadcrumbList] = useState<ItemType[]>([])

  const breadcrumbMap = useMemo(() => getBreadcrumbMap(authMenuList), [authMenuList])

  useEffect(() => {
    const meta = matches[matches.length - 1].data as Recordable
    const tempList = breadcrumbMap[meta.name] || []

    const formatList = tempList.map((item, index) => {
      const { title } = item.meta
      const isLast = index === tempList.length - 1
      return {
        title: !isLast ? <Link to={item.redirect}>{title}</Link> : title
      }
    })

    setBreadcrumbList(formatList)
  }, [matches])

  return (
    <div className={classNames('breadcrumb', className)}>
      <AntdBreadcrumb items={breadcrumbList} />
    </div>
  )
}

export default Breadcrumb
