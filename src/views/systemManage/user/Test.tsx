const Test = () => {
  throw new Error('组件内部崩溃了!')
  return <div>正常内容</div>
}

export default Test
