export const isEscapeKey = (event: KeyboardEvent) => event.key === 'Escape';
export const delay = (duration: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), duration);
  });
