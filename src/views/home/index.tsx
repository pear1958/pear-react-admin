const Home = () => {
  const data = Array(120)
    .fill('')
    .map(_ => Math.random())

  return (
    <div className="pear-box">
      {data.map(_ => (
        <div key={_}>{_}</div>
      ))}
    </div>
  )
}

export default Home
