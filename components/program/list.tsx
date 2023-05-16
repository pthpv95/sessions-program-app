import { Session } from "@/types";
import ProgramCard from "./card";

type Props = {
  sessions: Session[];
};

function ProgramList({ sessions }: Props) {
  if (sessions.length === 0) {
    return <div>No records</div>;
  }

  return (
    <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
      {sessions
        .sort((a, b) => {
          const dateA = new Date(a.start_date);
          const dateB = new Date(b.start_date);
          return dateB.getTime() - dateA.getTime();
        })
        .map((s) => (
          <ProgramCard key={s.id} session={s} />
        ))}
    </div>
  );
}

export default ProgramList;
