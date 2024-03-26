'use client';

import { useTodoList } from '@/services/todos';
import { TodoItem } from './item';
import { Loader } from '@/components';

export const TodoList = () => {
  const { data, error, isPending } = useTodoList();

  if (error) return <div className="text-rose-400">Something went wrong.</div>;

  if (isPending) return <Loader />;

  return (
    <ul className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {data?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
