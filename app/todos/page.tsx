import { AddTodoForm, TodoList } from './(components)';

export default function Todos() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20 text-start">
      <h1 className="font-semibold text-[24px] w-full text-left mb-4">Todos</h1>
      <AddTodoForm />
      <TodoList />
    </main>
  );
}
