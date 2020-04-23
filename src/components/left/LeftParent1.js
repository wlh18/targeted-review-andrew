import React from 'react'
import LeftParent2 from './LeftParent2'

const LeftParent1 = (props) => {
  return (
    <div className="left-parent left-one">
      <h2>Left Parent 1</h2>
      <LeftParent2 />
    </div>
  )
}
export default LeftParent1
