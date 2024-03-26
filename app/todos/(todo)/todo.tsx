'use client';

import { Loader } from '@/components';
import { useDeleteTodo, useTodo, useToggleTodo } from '@/services/todos';
import clsx from 'clsx';
import { redirect, useRouter } from 'next/navigation';
import { MdDelete, MdClose, MdCheck } from 'react-icons/md';
import { Comments } from '.';

export const Todo = ({ id }: { id: number }) => {
  const router = useRouter();
  const { data: todo, isPending, error } = useTodo(id);
  const { mutate: deleteMutate, isPending: isDeletePending } = useDeleteTodo();
  const { mutate: toogleMutate } = useToggleTodo();

  if (error) return redirect('/todos');

  if (isPending || isDeletePending) return <Loader />;

  const onCompletedToggle = () => {
    toogleMutate({ ...todo, completed: !todo.completed });
  };

  const onTodoDelete = () => {
    deleteMutate(todo.id);
    router.push('/todos');
  };

  return (
    <div
      className={clsx('max-w-[600px] border p-4 rounded-md mb-20', {
        'dark:bg-[#0b553d] bg-green-100': todo.completed,
      })}
    >
      <h3 className="text-[24px] font-semibold mb-5">{todo.title}</h3>
      <p className="">{todo.body}</p>
      <div className="flex flex-row gap-2 mt-5">
        <button
          onClick={onCompletedToggle}
          className="dark:hover:bg-green-600 dark:bg-green-500 bg-green-200 hover:bg-green-30 duration-200 p-2 text-[28px] rounded-md"
        >
          {todo.completed ? <MdClose /> : <MdCheck />}
        </button>
        <button
          onClick={onTodoDelete}
          className="dark:hover:bg-rose-600 dark:bg-rose-500 bg-rose-200 hover:bg-rose-30 duration-200 p-2 text-[28px] rounded-md"
        >
          <MdDelete />
        </button>
      </div>
      <Comments todoId={id} />
    </div>
  );
};
