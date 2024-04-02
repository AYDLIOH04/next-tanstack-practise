import { Loader } from '@/components';
import { useComments } from '@/services/comments';
import { FaUser } from 'react-icons/fa';

export const Comments = ({ todoId }: { todoId: number }) => {
  const { data, error, isPending } = useComments(todoId);

  if (error) return <div className="text-rose-400">Something went wrong.</div>;

  if (isPending) return <Loader />;

  return (
    <ul className="relative p-2 pt-6 mt-6 before:absolute before:w-full before:h-[1.5px] before:top-0 before:left-0 before:bg-slate-100 space-y-4">
      {data.map((comment) => (
        <li
          key={comment.id}
          className="border p-2 rounded-md flex flex-row items-start gap-2"
        >
          <div className="w-[10%] flex flex-col justify-center items-center gap-1">
            <div className="dark:bg-slate-500 bg-slate-200 p-3 rounded-full">
              <FaUser />
            </div>
            <p className="font-medium">{comment.name}</p>
          </div>
          <div className="w-full">
            <p className="text-[10px] text-slate-400 mb-2">26.03.2024 20:50</p>
            <p className="text-[14px]">{comment.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
