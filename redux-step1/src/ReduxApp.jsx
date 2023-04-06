import React from 'react'
import ReduxFooter from "./components/include/ReduxFooter";
import ReduxHeader from "./components/include/ReduxHeader";
import ReduxMainPage from './components/page/ReduxMainPage';


const ReduxApp = () => {
  return (
    <>
      <h2>리덕스 적용 verrrrr~~~~~~~~~~~~~~~</h2>
      <ReduxHeader />
      <ReduxMainPage />
      <ReduxFooter />
    </>
  )
}

export default ReduxApp
