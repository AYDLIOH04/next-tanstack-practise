export interface IComment {
  id: number;
  todoId: number;
  name: string;
  text: string;
}

export interface ICommentInput {
  name: string;
  text: string;
}
