import { axiosInstance } from '../instance';
import { ITodo, ITodoInput } from './types';

export class TodoService {
  static async getTodos(): Promise<ITodo[]> {
    const response = await axiosInstance.get('/todos');
    return response.data;
  }

  static async getTodoById(id: number): Promise<ITodo> {
    const response = await axiosInstance.get(`/todos/${id}`);
    return response.data;
  }

  static async addTodo(todo: ITodoInput) {
    await axiosInstance.post('/todos', { ...todo, completed: false });
  }

  static async deleteTodo(id: number) {
    await axiosInstance.delete(`/todos/${id}`);
  }

  static async toggleTodo(todo: ITodo) {
    await axiosInstance.patch(`/todos/${todo.id}`, todo);
  }
}
