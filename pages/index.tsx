import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
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
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
