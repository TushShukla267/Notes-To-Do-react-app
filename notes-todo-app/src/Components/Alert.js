import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'50px'}}>
      {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`}> {/* you can use props.alert && is used so as when one it is null the given statements after that is not executted*/} 
          <strong>{props.Alert.msg}</strong>
       </div>}
    </div>
  )
}

export default Alert

