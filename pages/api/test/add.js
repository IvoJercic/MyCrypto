// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import Test from "../../../models/testModel";
import connectMongoDB from "../../../utils/connectMongoDB";

/**
 *
 * @param {import('next'.NextApiRequest)} req
 * @param {import('next'.NextApiResponse)} res
 */
export  default async function addTest(req, res) {
  const { name, email } = req.body;
  console.log("CONNECTING TO MONGO...");

  await connectMongoDB();
  console.log("CONNECTED TO MONGO");

  const test = await Test.create(req.body);
  console.log(test);
  res.json({ test });
}


