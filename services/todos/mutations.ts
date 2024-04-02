import { useQueryClient, useMutation } from '@tanstack/react-query';
import { TodoService } from './api';
import { ITodo, ITodoInput } from './types';

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
    // onSettled: (_, error, variables) => {
    //   queryClient.invalidateQueries({
    //     queryKey: ['todo', { id: variables.id }],
    //   });
    // },
  });
};
