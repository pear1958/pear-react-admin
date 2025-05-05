import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  let [num, setNum] = useState(1)

  console.log('okkkkkkk')

  useEffect(() => {
    console.log('wwww')
  }, [num])

  const test = () => {
    let newNum = num + 1
    setNum(newNum)
  }

  return (
    <>
      <div onClick={test}>点击</div>
    </>
  )
}

export default App
