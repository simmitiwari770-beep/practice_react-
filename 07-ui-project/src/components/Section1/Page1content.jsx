import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import HeroText from './HeroText'

const Page1content = (props) => {
  return (
    <div className='px-17  flex gap-10 items-center h-[90vh] py-10'>
      <LeftContent/>
      <RightContent users={props.users}/>
      
    </div>
  )
}

export default Page1content
