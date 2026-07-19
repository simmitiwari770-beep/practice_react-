import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);
  return (
    <div className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-4 w-3/4 '>
        {props.user.map(function(elem){
          return <RightCard img={elem.img} tag={elem.tag} />
        })}
     
    </div>
  )
}

export default RightContent
