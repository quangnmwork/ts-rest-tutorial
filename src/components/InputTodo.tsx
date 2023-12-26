import { useRef } from "react"
import { Button } from "react-native";
import { clientProvider } from "../lib/ts-rest/client-provider";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const InputTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutateAsync } = clientProvider.createTodo.useMutation()
  const queryClient = useQueryClient()

  const onAddTodo = async () => {
    try {
      if (inputRef.current) {
        await mutateAsync({
          body: {
            title: inputRef.current?.value
          }
        })
        toast.success('Add todo success');
        queryClient.invalidateQueries({ queryKey: ['GET_ALL_TODO'] })

      }
    } catch (error) {
      toast(JSON.stringify(error))
    }
  }

  return (
    <div className='flex items-center max-w-64 gap-2 mx-auto h-12'>
      <input ref={inputRef} placeholder="Add todo..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <button
        onClick={onAddTodo}
        className="bg-blue-500 border-none rounded-lg text-white h-full px-4">Add</button>
    </div>
  )
}

export default InputTodo