import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

router.get('/all', (req: Request, res: Response) => {
  const query = `SELECT * FROM industry;`;

  pool
    .query(query)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

router.post(
  '/user',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user = req.body.user_id;
    const selected = req.body.selected;
    console.log('console log industry back side', req.body, user, selected);
    const queryText = `INSERT INTO "userIndustry" (user_id, selected) VALUES ($1, $2);`;
    pool
      .query(queryText, [user, selected])
      .then(() => {
        res.sendStatus(200);
      })

      .catch((err) => {
        console.log('Error completing POST [userIndustry] query', err);
        res.sendStatus(500);
      });
  }
);

export default router;
