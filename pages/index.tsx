import React, { useEffect, useState } from 'react'

const HomePage = (): JSX.Element => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      //.then((json) => console.log(json))  //.then(console.log)
      .then((obj) => {
        setProductList(obj.data)
      })
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product) => {
        const { id, name } = product
        return <div key={id}>{name}</div>
      })}
    </div>
  )
}

export default HomePage
