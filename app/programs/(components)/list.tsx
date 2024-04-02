'use client';

import { usePrograms } from '@/services/programs';
import { Pagination, Spinner } from '@nextui-org/react';
import { useState } from 'react';
import { ProgramItem } from './item';

export const ProgramList = () => {
  const [page, setPage] = useState(1);
  const { data, error, isPending } = usePrograms(page);

  if (error) return <div className="text-rose-400">Something went wrong.</div>;

  if (isPending) return <Spinner size="lg" label="Loading..." />;

  const { programs, totalCount } = data;
  return (
    <section className="pt-20 pb-4 h-[calc(100vh-80px)] flex flex-col justify-between items-center gap-6">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {programs?.map((program) => (
          <ProgramItem key={program.id + program.title} program={program} />
        ))}
      </ul>
      <div className="justify-self-end">
        <Pagination
          total={Math.ceil(totalCount / 4)}
          initialPage={1}
          showControls
          page={page}
          onChange={setPage}
        />
      </div>
    </section>
  );
};
