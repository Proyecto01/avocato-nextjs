import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()

  const id = request.query.id as string

  //1. const entry = await db.getById(id);

  /* response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify({data: entry})); */

  /*2. const entry = await db.getById(id);
    response.status(200).json({data: entry}); */

  const avo = await db.getById(id)
  response.status(200).json(avo)
}

export default allAvos
