import React from 'react'

const MainPage = (props) => {
  const{number, addNumber} = props
  return (
    <>
      <div className='main_container'>
      컨텐츠 여영여여여여여여여영여여여여여역이라다
      <hr />
      <h1>{number}</h1>
      <button onClick={addNumber}>아짜증나게하네</button>
      </div>
    </>
  )
}

export default MainPage
