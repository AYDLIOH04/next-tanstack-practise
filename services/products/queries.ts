import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { ProductService } from './api';
import { IProduct } from './types';

export const useProducts = () => {
  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ProductService.getProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage.length) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (_, __, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });
};

export const useProduct = (id: number | null) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['product', id],
    queryFn: () => ProductService.getProduct(id!),
    enabled: Boolean(id),
    placeholderData: () => {
      const cachedProducts = (
        queryClient.getQueryData(['products']) as {
          pages: IProduct[] | undefined;
        }
      )?.pages?.flat(2);

      if (cachedProducts) {
        return cachedProducts.find((item) => item.id === id);
      }
    },
  });
};
