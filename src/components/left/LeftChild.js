import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  updateValue1,
  updateValue2,
  updateValue3,
  updateValue4,
  updateAllValues,
} from '../../ducks/valuesReducer'

const LeftChild = (props) => {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')

  const submitValue1 = () => {
    props.updateValue1(value1)
  }

  const submitValue2 = () => {
    props.updateValue2(value2)
  }

  const submitValue3 = () => {
    props.updateValue3(value3)
  }

  const submitValue4 = () => {
    props.updateValue4(value4)
  }

  const submitAllValues = () => {
    const values = { value1, value2, value3, value4 }
    props.updateAllValues(values)
  }

  return (
    <div className="left-child">
      Left Child - Do stuff here
      <div className="form-row">
        <input
          type="text"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
        <button onClick={submitValue1}>Submit Value 1</button>
      </div>
      <div className="form-row">
        <input
          type="text"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
        <button onClick={submitValue2}>Submit Value 2</button>
      </div>
      <div className="form-row">
        <input
          type="text"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
        <button onClick={submitValue3}>Submit Value 3</button>
      </div>
      <div className="form-row">
        <input
          type="text"
          value={value4}
          onChange={(e) => setValue4(e.target.value)}
        />
        <button onClick={submitValue4}>Submit Value 4</button>
      </div>
      <br />
      <br />
      <br />
      <button onClick={submitAllValues}>Submit all values</button>
    </div>
  )
}

const mapDispatchToProps = () => {
  return {
    updateValue1,
    updateValue2,
    updateValue3,
    updateValue4,
    updateAllValues,
  }
}

export default connect(null, mapDispatchToProps())(LeftChild)
