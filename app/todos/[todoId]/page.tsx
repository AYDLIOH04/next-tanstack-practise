import Link from 'next/link';
import { Todo } from '../(components)';
import { IoIosArrowForward } from 'react-icons/io';

export default function TodoPage({ params }: { params: { todoId: string } }) {
  const todoId = Number(params.todoId);

  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center">
      <div className="pt-20 self-start mb-10 flex justify-center items-center gap-1 px-4">
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
