import { axiosInstance } from '../instance';
import { IComment } from './types';

export class CommentService {
  static async getComments(todoId: number): Promise<IComment[]> {
    const response = await axiosInstance.get('/comments', {
      params: { todoId },
    });
    return response.data;
  }
}
