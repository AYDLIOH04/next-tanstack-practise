import { IProgram } from '@/services/programs';
import { getProgramIcon } from '@/utils/icon';

export const ProgramItem = ({ program }: { program: IProgram }) => {
  const Icon = getProgramIcon(program.title);
  return (
    <li className="border p-3 rounded-md flex flex-row gap-4">
      <div className="w-1/6 flex justify-center items-center p-4">
        <Icon className="w-full h-full" size={20} />
      </div>
      <div className="w-5/6">
        <h4 className="text-[20px] font-semibold">{program.title}</h4>
        <p className="text-[15px] dark:text-gray-300 text-gray-500">
          {program.description}
        </p>
      </div>
    </li>
  );
};
