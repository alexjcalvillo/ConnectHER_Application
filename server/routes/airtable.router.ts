require('dotenv').config();
import { Request, Response } from 'express';
import express from 'express';
import axios from 'axios';
const router: express.Router = express.Router();



const AIRTABLE_KEY = process.env.AIRTABLE_API_KEY;
const BASE = process.env.BASE;


//-----------------------------
//         GET ROUTES         |
//-----------------------------

// each route retrieves the information stores on the table name of the endpoint
router.get(
  '/speaker',
  (req: Request, res: Response, next: express.NextFunction): void => {
    axios({
      method: 'GET',
      url: `https://api.airtable.com/v0/${BASE}/Kansas%20City%20Diverse%20Speaker%20Directory`,
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }
);

router.get(
  '/spaces',
  (req: Request, res: Response, next: express.NextFunction): void => {
    axios({
      method: 'GET',
      url: `https://api.airtable.com/v0/app1iZZ3DnqBxxEWd/Event%20Spaces%20in%20KC`,
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }
);

router.get(
  '/businesses',
  (req: Request, res: Response, next: express.NextFunction): void => {
    axios({
      method: 'GET',
      url: `https://api.airtable.com/v0/appQMs9RQoFgjtSQX/Womxn%20Owned%20Businesses`,
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }
);

export default router;
