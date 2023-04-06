import { Button } from 'react-bootstrap'
import React, { useState } from 'react'

const UseStateApp1 = () => {
  let nums = [1, 2, 3]
  const [num2, setNum2] = useState(0)
  let result = 0
  const plus = () =>{
    console.log('plus ${result}')
    result++
    setNum2(num2+1)
  }
  return (
    <>
      <h2>useState복습-1</h2>
      <Button onClick={plus}>더하기</Button>
      <h2>덧셈 결과 출력{result}</h2>
      <h2>덧셈 결과 출력{num2}</h2>
      <hr />
      {nums.map((num, index)=>(<h3 key={index}>{num}</h3>))}
      <hr />
    </>
  )
}

export default UseStateApp1
/* 
  상태값이 변할 때 마다 렌더링이 되도록 하고 싶다면 useState훅을 사용할 것

*/
