import React from 'react'
import { useDispatch } from 'react-redux'
import { increase } from '../../redux/store'

const ReduxFooter = () => {
  const dispatch = useDispatch()

  const handleAdd = (e) => {
    e.preventDefault() //이벤트 버블링 차단
    dispatch(increase('양아양아'))
  }
  

  return (
    <>
    <div className='footer_container'>
      <h1>리덕스용 발바닥이다 발바닥 바다다다다다다다닥발바다다다닥</h1>
      <hr />
      <button onClick={handleAdd}>추가</button>  
    </div>
    </>
  )
}

export default ReduxFooter
