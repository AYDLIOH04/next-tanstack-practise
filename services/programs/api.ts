import { axiosInstance } from '../instance';
import { IProgram } from './types';

export class ProgramService {
  static async getPrograms(
    page: number = 1
  ): Promise<{ programs: IProgram[]; totalCount: number }> {
    const { data, headers } = await axiosInstance.get(
      `/programs?_page=${page}&_limit=4`
    );
    return { programs: data, totalCount: Number(headers['x-total-count']) };
  }
}
