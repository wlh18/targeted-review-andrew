import React from 'react'
import RightParent2 from './RightParent2'

const RightParent1 = (props) => {
  return (
    <div className="right-parent right-one">
      <h2>Right Parent 1</h2>
      <RightParent2 />
    </div>
  )
}
export default RightParent1
