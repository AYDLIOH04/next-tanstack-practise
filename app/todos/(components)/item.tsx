import { ITodo, useDeleteTodo, useToggleTodo } from '@/services/todos';
import clsx from 'clsx';
import Link from 'next/link';

export const TodoItem = ({ todo }: { todo: ITodo }) => {
  const { mutate: deleteMutate } = useDeleteTodo();
  const { mutate: toogleMutate } = useToggleTodo();

  const onCompletedToggle = () => {
    toogleMutate({ ...todo, completed: !todo.completed });
  };

  const onTodoDelete = () => {
    deleteMutate(todo.id);
  };

  return (
    <li
      className={clsx(
        'border p-3 rounded-md flex flex-col justify-between gap-4',
        { 'dark:bg-[#0b553d] bg-green-100': todo.completed }
      )}
    >
      <div>
        <h4 className="mb-8 relative after:w-full after:h-[0.5px] after:absolute after:-bottom-2 after:left-0 after:bg-current font-semibold">
          {todo.id}. {todo.title}
        </h4>
        <p className="text-[14px] text-gray-400 dark:text-gray-300">
          {todo.body}
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 flex-row justify-between items-center">
          <button
            className="w-1/2 py-1 duration-200 dark:hover:bg-gray-700 hover:bg-gray-300 dark:bg-gray-600 bg-gray-200 rounded-l-md"
            onClick={onCompletedToggle}
          >
            Completed
          </button>
          <button
            className="w-1/2 py-1 duration-200 dark:hover:bg-rose-600 dark:bg-rose-500 bg-rose-200 hover:bg-rose-300 rounded-r-md"
            onClick={onTodoDelete}
          >
            Delete
          </button>
        </div>
        <Link
          href={`/todos/${todo.id}`}
          className="duration-200 w-full dark:bg-blue-500 dark:hover:bg-blue-600 bg-blue-200 hover:bg-blue-300 py-1 rounded-md text-center"
        >
          More
        </Link>
      </div>
    </li>
  );
};
