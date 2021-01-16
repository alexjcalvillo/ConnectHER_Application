import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
// import { QueryConfig } from 'pg';

const router: express.Router = express.Router();

router.get('/all', (req: Request, res: Response) => {
  const query = `SELECT * FROM "careerLevel";`;

  pool
    .query(query)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

export default router;
