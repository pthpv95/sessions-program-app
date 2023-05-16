import { Session } from "@/types";
import { take, toUpper } from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";

let db: Session[];

const SESSION_API_ENDPOINT = "https://api.entrylevel.net/test/sessions";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Session[]>
) {
  if (!db) {
    // cache in memory
    db = await fetch(SESSION_API_ENDPOINT).then((res) => res.json());
  }

  const { short_title, status } = req.query;

  if (!status && !short_title) {
    // return first 50 programs for init load
    return res.status(200).json(take(db, 50));
  }

  let result = db;

  if (status) {
    result = result.filter((s) => s.status === toUpper(status as string));
  }

  if (short_title) {
    // assume there's 1 program in each session
    result = result.filter((s) => s.program[0].short_title === short_title);
  }

  res.status(200).json(result);
}
