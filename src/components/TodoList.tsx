import { hashQueryKey } from "@tanstack/react-query"
import { clientProvider } from "../lib/ts-rest/client-provider"
import TodoItem from "./TodoItem"

const TodoList = () => {
  const { data, isLoading } = clientProvider.getAllTodo.useQuery(['GET_ALL_TODO'])


  return (
    isLoading ? <p>Loading...</p> :
      <div className="flex flex-col">
        {data?.body.map(todoItem => <TodoItem {...todoItem} key={todoItem.id} />)}
      </div>
  )
}

export default TodoList