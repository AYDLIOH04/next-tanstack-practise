'use client';
import { useClickOutside, useEscapeKeydown, useOverflowEffect } from '@/hooks';
import { IoMdClose } from 'react-icons/io';
import { useRef } from 'react';

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const ref = useRef(null);
  useOverflowEffect('modal-scroll-disabled', [isOpen]);
  useEscapeKeydown(onClose);
  useClickOutside(onClose, ref);

  return (
    <div className="z-[50] fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div
        ref={ref}
        className="dark:bg-[#222] bg-white p-10 rounded-md md:w-1/2 w-full"
      >
        {children}
      </div>
      <div
        className="cursor-pointer fixed top-4 right-4 dark:hover:bg-gray-600 hover:bg-gray-200 rounded-full duration-250 p-1"
        onClick={onClose}
      >
        <IoMdClose size={35} className="text-black dark:text-white" />
      </div>
    </div>
  );
};
