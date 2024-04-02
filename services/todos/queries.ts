import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { TodoService } from './api';

export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: TodoService.getTodos,
    refetchInterval: 5 * 1000,
  });
};

export const useTodo = (id: number) => {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: () => TodoService.getTodoById(id),
    refetchInterval: 5 * 1000,
  });
};

// export const useTodoIds = () => {
//   return useQuery({
//     queryKey: ['todos'],
//     queryFn: TodoService.getTodoIds,
//     refetchInterval: 5 * 1000,
//   });
// };

// export const useTodos = (ids: number[] | undefined) => {
//   return useQueries({
//     queries: (ids ?? []).map((id) => ({
//       queryKey: ['todo', { id }],
//       queryFn: () => TodoService.getTodoById(id),
//     })),
//   });
// };
