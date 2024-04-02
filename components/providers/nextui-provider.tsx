'use client';

import { NextUIProvider } from '@nextui-org/system';

export const NextInterfaceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
