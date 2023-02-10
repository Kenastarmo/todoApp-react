import React from 'react'

const todo = (props) => {

    const bgColor = {
        backgroundColor: props.completed ? "#80808033" : "white",
        textDecoration: props.completed ? "line-through" : "none"
    }

  return (
    <div className="item-container">
            <li className="item" style={bgColor}>{props.tekst}</li>
            <button className="edit-btn" style={bgColor} onClick={props.editTodo}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="trash-btn" onClick={props.deleteTodo} style={bgColor}>
                <i className="fa-solid fa-trash"></i>
            </button>
            <button className="check-btn" onClick={props.handleCompleted} style={bgColor}>
                <i className="fa-solid fa-check"></i>
            </button>
        </div>
  )
}

export default todo