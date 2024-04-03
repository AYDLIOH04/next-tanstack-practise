/* eslint-disable @next/next/no-img-element */
'use client';

import { Modal } from '@/components/modal';
import { useProduct } from '@/services/products';

export const ProductModal = ({
  selectedId,
  onModalClose,
}: {
  selectedId: number | null;
  onModalClose: () => void;
}) => {
  const { data, error } = useProduct(selectedId);

  if (error) return <div className="text-rose-400">Something went wrong.</div>;

  if (data) {
    return (
      <Modal isOpen={Boolean(selectedId)} onClose={onModalClose}>
        <div className="flex flex-row gap-10">
          <div>
            <h4 className="text-[24px] font-semibold mb-4">{data?.name}</h4>
            <p className="text-[16px] text-gray-500 dark:text-gray-400">
              {data?.description}
            </p>
          </div>
          <div>
            <img src={data?.image} alt={data?.name} />
          </div>
        </div>
      </Modal>
    );
  }

  return null;
};
