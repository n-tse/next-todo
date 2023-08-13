type ToDoItemProps = {
  id: string
  title: string
  complete: Boolean
}

const ToDoItem = ({ id, title, complete }: ToDoItemProps) => {
  return (
    <li className="flex gap-1 ml-4">
      <input id={id} type="checkbox" className="cursor-pointer peer"/>
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-300">{title}</label>
    </li>
  )
}

export default ToDoItem