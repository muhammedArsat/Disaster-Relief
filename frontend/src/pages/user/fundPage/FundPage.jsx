import React from 'react'
import FundForm from '../../../components/user/fundForm/FundForm'
import FundProgress from '../../../components/user/fundProgress/FundProgress'
import "./FundPage.css"

const FundPage = () => {
  return (
    <div className='fundpage'>
      <FundForm />
      <FundProgress />
    </div>
  )
}

export default FundPage
