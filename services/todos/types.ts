export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  body: string;
}

export interface ITodoInput {
  title: string;
  body: string;
}
