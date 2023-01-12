import React from 'react'

export default function ClickCounter (props) {
  return <button onClick={props.onCounterClick}>{props.text}</button>
}
