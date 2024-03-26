'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAddTodo, ITodoInput } from '@/services/todos';

const formSchema = z.object({
  title: z.string().nonempty('Title is required').max(20, 'Title is too long'),
  body: z.string().nonempty('Body is required'),
});

export const AddTodoForm = () => {
  const { mutate, isPending } = useAddTodo();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITodoInput>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<ITodoInput> = (data) => {
    reset();
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border p-3 rounded-md w-full mb-4 flex lg:flex-row flex-col gap-4 items-start justify-center"
    >
      <div className="lg:w-1/3 w-full flex flex-col gap-1">
        <input
          placeholder="Title"
          className="w-full border p-3 rounded-md dark:bg-transparent"
          {...register('title')}
          type="text"
        />
        <span className="text-rose-400 text-[14px] ml-3">
          {errors.title?.message}
        </span>
      </div>
      <div className="lg:w-1/3 w-full flex flex-col gap-1">
        <textarea
          placeholder="Body"
          className="w-full min-h-[50px] h-[50px] border p-3 rounded-md dark:bg-transparent"
          {...register('body')}
        />
        <span className="text-rose-400 text-[14px] ml-3">
          {errors.body?.message}
        </span>
      </div>
      <button
        disabled={isPending}
        type="submit"
        className="lg:w-1/3 w-full p-3 duration-200 rounded-md font-semibold text-[20px] hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        {isPending ? (
          <>
            <span className="relative">
              <span className="absolute -left-8 top-0.5 w-5 h-5 mr-4 inline-block animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] dark:text-white" />
              Pending...
            </span>
          </>
        ) : (
          'Create Todo'
        )}
      </button>
    </form>
  );
};
