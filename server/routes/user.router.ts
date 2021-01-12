import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';
import userStrategy from '../strategies/user.strategy';
import { encryptPassword } from '../modules/encryption';

const router: express.Router = express.Router();

//-----------------------------
//        GET ROUTES         |
//-----------------------------
// if user is granted access from login route, return user information

router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  res.send(req.user);
});

//-----------------------------
//        POST ROUTES         |
//-----------------------------
// Route endpoint is descriptive of action

router.post(
  '/register',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const email: string | null = <string>req.body.email;
    const password: string | null = encryptPassword(req.body.password);
    const firstName: string = req.body.firstName;
    const lastName: string = req.body.lastName;

    const queryText: string = `INSERT INTO "users" (email, password, first_name, last_name)
    VALUES ($1, $2, $3, $4) RETURNING id`;
    pool
      .query(queryText, [email, password, firstName, lastName])
      .then((response) => {
        res.send(response.rows[0]);
      })
      .catch((err) => {
        console.log(`Error saving user to database: ${err}`);
        res.sendStatus(500);
      });
  }
);

router.post(
  '/login',
  userStrategy.authenticate('local'),
  (req: Request, res: Response): void => {
    res.sendStatus(200);
  }
);

router.post('/logout', (req: Request, res: Response): void => {
  req.logout();
  res.sendStatus(200);
});

router.post(
  '/level',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user: string = req.params.Id;
    const level: string = req.body.member_level;

    const queryText = `INSERT INTO "member_level" (user_id, member_level)
    VALUES ($1, $2) RETURNING id`;
    pool
      .query(queryText, [user, level])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  }
);

// router.get(
//   '/level',
//   (req: Request, res: Response, next: express.NextFunction): void => {
//     const queryText = `SELECT * FROM member_level;`;

//     pool
//       .query(queryText)
//       .then((dbResponse) => {
//         console.log(dbResponse);
//         res.send(dbResponse.rows);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.sendStatus('Retrieve Access Level Error', 500);
//       });
//   }
// );

export default router;
