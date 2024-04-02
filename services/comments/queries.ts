import { useQuery } from "@tanstack/react-query";
import { CommentService } from "./api";

export const useComments = (todoId: number) => {
  return useQuery({
    queryKey: ['comments'],
    queryFn: () => CommentService.getComments(todoId),
    refetchInterval: 5 * 1000,
  });
}