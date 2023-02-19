import React from 'react'

const Pagination = ({current,onChange}) => {
  return (
    <div>
        <button style={{padding:"5px",margin:"5px"}} disabled={current===1} onClick={()=>onChange(-1)}>Prev</button>
        <button style={{padding:"5px",margin:"5px"}}>{current}</button>
        <button style={{padding:"5px",margin:"5px"}} onClick={()=>onChange(1)}>Next</button>
    </div>
  )
}

export default Pagination;

