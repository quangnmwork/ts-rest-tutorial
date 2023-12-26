import { FC } from 'react';
import InputTodo from './components/InputTodo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TodoList from './components/TodoList';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()


export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-col items-center py-10'>
        <InputTodo />
        <TodoList />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
};
