import { formatDate } from "@/helpers";
import { Session } from "@/types";
import Image from "next/image";

type Props = {
  session: Session;
};

function ProgramCard({ session }: Props) {
  const program = session.program[0];
  return (
    <div className="flex border-2 border-gray-400 flex-col p-3 rounded max-w-[240px]">
      <Image
        src={program.thumbnail_img_url}
        alt={program.display_title}
        width={200}
        height={200}
      />
      <p className="mt-3 bold">{program.display_title}</p>
      <p className="text-xs">
        {formatDate(session.start_date)} - {formatDate(session.end_date)}
      </p>
    </div>
  );
}

export default ProgramCard;
