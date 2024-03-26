import Link from 'next/link';
import { Todo } from '../(todo)';
import { IoIosArrowForward } from 'react-icons/io';

export default function TodoPage({ params }: { params: { todoId: string } }) {
  const todoId = Number(params.todoId);

  return (
    <main className="flex flex-col justify-center items-center mt-20">
      <div className="self-start mb-10 flex justify-center items-center gap-1 px-4">
        <Link href="/todos" className="font-semibold hover:underline">
          Todos
        </Link>
        <IoIosArrowForward />
        <span>Todo {todoId}</span>
      </div>
      <Todo id={todoId} />
    </main>
  );
}
