import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ProgramService } from './api';

export const usePrograms = (page: number) => {
  return useQuery({
    queryKey: ['programs', { page }],
    queryFn: () => ProgramService.getPrograms(page),
    placeholderData: keepPreviousData,
  });
};
