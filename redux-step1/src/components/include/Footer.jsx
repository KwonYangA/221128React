import React from 'react'

const Footer = (props) => {
  const {addNumber} = props //구조 분해 할당
  return (
    <>
      <div className='footer_container'>
      발바닥이다 발바닥 바다다다다다다다닥발바다다다닥<br />
      <button onClick={addNumber}>증가한다다다다</button>
      </div>
    </>
  )
}

export default Footer
