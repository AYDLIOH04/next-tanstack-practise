'use client';

import { useProducts } from '@/services/products';
import { Button, Spinner } from '@nextui-org/react';
import { Fragment, useState } from 'react';
import { ProductModal } from './modal';
import { ProductItem } from './item';

export const ProductList = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const onModalClose = () => {
    setSelectedId(null);
  };

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isPending,
    error,
  } = useProducts();

  if (error) return <div className="text-rose-400">Something went wrong.</div>;

  if (isPending) return <Spinner size="lg" label="Loading..." />;

  return (
    <div className="pt-20 pb-6 min-h-[calc(100vh-80px)] w-full flex flex-col gap-10 justify-between items-center">
      <ul className="grid grid-cols-2 gap-5 h-full w-full">
        {data?.pages.map((group, index) => (
          <Fragment key={index}>
            {group.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                setSelectedId={setSelectedId}
              />
            ))}
          </Fragment>
        ))}
      </ul>
      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        color="primary"
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </Button>
      {selectedId && (
        <ProductModal selectedId={selectedId} onModalClose={onModalClose} />
      )}
    </div>
  );
};
