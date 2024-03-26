import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { TodoService } from './api';
import { ITodo, ITodoInput } from './types';

export const useTodoList = () => {
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
  });
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ITodoInput) => TodoService.addTodo(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => TodoService.deleteTodo(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });
};

export const useToggleTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (todo: ITodo) => TodoService.toggleTodo(todo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });
};
