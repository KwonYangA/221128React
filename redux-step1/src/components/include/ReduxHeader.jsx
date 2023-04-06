import React from 'react'
import { useSelector } from 'react-redux'


const ReduxHeader = () => {
  const empVO = useSelector((store) => store.empVO)

  return (
    <div className="header_container">
    리덕스 머리다머리 머리라고 ㅡㅡ
    <hr />
    {empVO && `사원번호:${empVO.empno}, 사원명:${empVO.ename}`}
  </div>
  )
}

export default ReduxHeader
