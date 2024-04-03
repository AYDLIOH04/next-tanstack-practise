/* eslint-disable @next/next/no-img-element */
'use client';

import { Loader } from '@/components';
import { IProduct } from '@/services/products';
import { Button } from '@nextui-org/react';
import clsx from 'clsx';
import { useState } from 'react';

export const ProductItem = ({
  product,
  setSelectedId,
}: {
  product: IProduct;
  setSelectedId: (id: number) => void;
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const onImageLoad = () => {
    setIsImageLoading(false);
  };

  const onProductMore = () => {
    setSelectedId(product.id);
  };

  return (
    <li className="min-h-[300px] w-full border rounded-md py-8 px-10 flex gap-10">
      <div className="w-1/2 flex flex-col justify-between gap-5">
        <div>
          <h4 className="text-[24px] font-semibold">{product.name}</h4>
          <p className="text-[14px] text-gray-500 dark:text-gray-400">
            {product.description}
          </p>
        </div>
        <Button onClick={onProductMore} className="w-full">
          More
        </Button>
      </div>
      <div className="w-1/2 flex justify-center items-start">
        {isImageLoading && (
          <div className="w-full h-full flex justify-center items-center">
            <Loader />
          </div>
        )}
        <img
          onLoad={onImageLoad}
          src={product.image}
          alt={product.name}
          className={clsx('h-auto', isImageLoading ? 'hidden' : 'flex')}
        />
      </div>
    </li>
  );
};
