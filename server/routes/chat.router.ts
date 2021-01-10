import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

function getMessages(chatId: any[], userId: number) {
  let messageArray: any[];
  for (let i = 0; i < 1; i++) {
    pool
      .query(
        `SELECT "messages".chat_id, "messages".user, "messages".message  FROM "chat_instance"
  JOIN "messages" ON "chat_instance".id = "messages".chat_id
  WHERE "chat_instance".id = $2 AND "chat_instance".user_1 = $1 OR "chat_instance".user_2 = $1
  ORDER BY "messages".id ASC;
  `,
        [userId, chatId[i].chat_id]
      )
      .then((response) => {
        console.log(response.rows);
        messageArray.push(response.rows);
      })
      .catch((err) => {
        console.log('Error completing GET [chat[messages]] query', err);
      });
  }
}

router.get(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    pool
      .query(
        `SELECT id FROM "chat_instance"
        WHERE user_1 = $1 OR user_2 = $1;
        `,
        [req.params.id]
      )
      .then((response) => {
        const chat = getMessages(response.rows, parseInt(req.params.id));
        const organizedResponse = {
          chat,
        };
        res.send(organizedResponse);
      })
      .catch((err) => {
        console.log('Error completing GET [chat] query', err);
        res.sendStatus(500);
      });
  }
);

router.get(
  '/:id/:chat_id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log([req.params.id, req.params.chat_id]);
    pool
      .query(
        `SELECT "messages".chat_id, "messages".user, "messages".message  FROM "chat_instance"
        JOIN "messages" ON "chat_instance".id = "messages".chat_id
        WHERE "chat_instance".id = $2 AND "chat_instance".user_1 = $1 OR "chat_instance".user_2 = $1
        ORDER BY "messages".id ASC;
        `,
        [req.params.id, req.params.chat_id]
      )
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.log('Error completing GET [favorites] query', err);
        res.sendStatus(500);
      });
  }
);

router.post(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const favoriteId: string = req.body.favoriteId;
    const favoriteType: string = req.body.favoriteType;

    pool
      .query(
        `INSERT INTO "favorites" ("user_id", "favorite_id", "favorite_type")
      VALUES ($1, $2, $3);`,
        [req.params.id, favoriteId, favoriteType]
      )
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error completing POST [favorites] query', err);
        res.sendStatus(500);
      });
  }
);

router.put(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const favoriteId: string = req.body.favoriteId;
    const favoriteType: string = req.body.favoriteType;

    pool
      .query(
        `DELETE FROM "favorites" WHERE "user_id" = $1 AND "favorite_id" = $2 AND "favorite_type" = $3;`,
        [req.params.id, favoriteId, favoriteType]
      )
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error completing DELETE [favorites] query', err);
        res.sendStatus(500);
      });
  }
);

export default router;
