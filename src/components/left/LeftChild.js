import React, { useState } from 'react'

const LeftChild = (props) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')

  const submitValue1 = (value) => {}
  const submitValue2 = (value) => {}
  const submitValue3 = (value) => {}
  const submitValue4 = (value) => {}
  const submitAllValues = (value) => {}

  return (
    <div className="left-child">
      Left Child - Do stuff here
      <input
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <button onClick={submitValue1}>Submit Value 1</button>
      <input
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <button onClick={submitValue2}>Submit Value 2</button>
      <input
        type="text"
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
      <button onClick={submitValue3}>Submit Value 3</button>
      <input
        type="text"
        value={value4}
        onChange={(e) => setValue4(e.target.value)}
      />
      <button onClick={submitValue4}>Submit Value 4</button>
      <br />
      <br />
      <br />
      <button onClick={submitAllValues}>Submit all values</button>
    </div>
  )
}
export default LeftChild
