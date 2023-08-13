"use client"

type ToDoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
}

const ToDoItem = ({ id, title, complete, toggleTodo }: ToDoItemProps) => {
  return (
    <li className="flex gap-1 ml-4">
      <input id={id} type="checkbox" defaultChecked={complete} className="cursor-pointer peer" onChange={e => toggleTodo(id, e.target.checked)}/>
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-300">{title}</label>
    </li>
  )
}

export default ToDoItem