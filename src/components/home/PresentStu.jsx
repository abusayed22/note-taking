import React from 'react'

function PresentStu(props) {
  const toggleAction = (toggleId) => {
    props.setAllStudents(props.allStudents.map( (single) => {
      if(single.id === toggleId) {
        single.isPresent =! single.isPresent
      }
      
      return single
    }))
  }

  return (
    <div>
      <center><b>Present Students List</b></center> <br /><br />
      <ul>
          {props.allStudents.filter(single => single.isPresent === true).map(item => (
            <li className='mt-3 mb-3' key={item.id}>
              {item.name}
              <button onClick={() => toggleAction(item.id)} className="btn btn-sm ml-3 btn-error">accidential opp</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default PresentStu