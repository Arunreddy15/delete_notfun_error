// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <div className="list-item">
      <li>{title}</li>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}
export default TodoItem
