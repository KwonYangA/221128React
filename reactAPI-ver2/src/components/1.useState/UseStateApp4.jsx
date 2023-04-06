import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const UseStateApp4 = () => {
  const[data, setData] = useState(0)
  const plus = () => {
    console.log('plus')
    let resDate = 5
    setData(data+1)
  }
  useEffect(()=>{
    console.log('effect')
  }, [data])
  return (
    <>
      <h3>데이터 : {data}</h3>
      <Button onClick={plus}>더하기</Button>
      
    </>
  )
}

export default UseStateApp4
