import toast from "react-hot-toast"
import { clientProvider } from "../lib/ts-rest/client-provider"
import { useQueryClient } from "@tanstack/react-query";

const TodoItem = ({ id, title }: { id: number, title: string }) => {
  const { mutateAsync } = clientProvider.deleteTodo.useMutation();
  const { mutateAsync: mutateUpdateAsync } = clientProvider.updateTodo.useMutation()
  const queryClient = useQueryClient()

  const onDelete = async () => {
    try {
      await mutateAsync({
        params: { id }
      })
      queryClient.invalidateQueries({ queryKey: ['GET_ALL_TODO'] })
      toast.success("Delete success")
    } catch (error) {
      toast.error(JSON.stringify(error))
    }
  }

  const onUpdate = async () => {
    try {
      const updateRandomNum = Math.floor(Math.random() * 1000)
      await mutateUpdateAsync({
        body: {
          title: `Todo ${updateRandomNum}`
        }, params: {
          id: id
        }
      })

      queryClient.invalidateQueries({ queryKey: ['GET_ALL_TODO'] })
      toast.success("Update success")
    } catch (error) {
      toast.error(JSON.stringify(error))
    }
  }


  return (
    <div className="flex bg-blue-300 rounded-md my-2 px-3 py-4 justify-between items-center w-[600px]">
      <span>{title}</span>
      <div className="flex gap-3">
        <button className="bg-cyan-300 rounded-sm p-2" onClick={onUpdate}>
          Update
        </button>
        <button className="bg-red-400 rounded-sm p-2" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem