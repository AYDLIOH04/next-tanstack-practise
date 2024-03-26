import { AddTodoForm, TodoList } from './(todo)';

export default function Todos() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-start">
      <h1 className="font-semibold text-[24px] w-full text-left mb-4">Todos</h1>
      <AddTodoForm />
      <TodoList />
    </main>
  );
}
