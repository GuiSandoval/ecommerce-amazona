import { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await db.connect();
  await db.disconnect();
  return response.status(200).json({ message: "Hello World" });
}
