import React from 'react'
import { useSelector } from 'react-redux'


const ReduxMainPage = () => {
  const number = useSelector(store => store.number)
  const depts = useSelector(store => store.depts)

  return (
    <>
      <div className='main_container'>
      <h1>컨텐츠 영여여여여</h1>
      <hr />
      <h3>{number}</h3>
        {
          depts && depts.map((dept, index)=>(
            <h2 key={index}>{dept.DEPTNO}{dept.DNAME}{dept.LOC}</h2>
          )
        )}

      </div>
    </>
  )
}

export default ReduxMainPage
