import { query, Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

//GET route for getting the count for each age
router.get(
  '/age',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '18 years of age or less';`;
    pool
      .query(queryText)
      .then((dbResponse) => {
        console.log(dbResponse.rows[0].count);
        const age18 = dbResponse.rows[0].count;
        const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '18-24';`;
        pool
          .query(queryText)
          .then((dbResponse) => {
            const age1824 = dbResponse.rows[0].count;
            const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '25-34';`;
            pool
              .query(queryText)
              .then((dbResponse) => {
                const age2534 = dbResponse.rows[0].count;
                const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '35-44';`;
                pool
                  .query(queryText)
                  .then((dbResponse) => {
                    const age3544 = dbResponse.rows[0].count;
                    const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '45-54';`;
                    pool
                      .query(queryText)
                      .then((dbResponse) => {
                        const age4554 = dbResponse.rows[0].count;
                        const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '55-64';`;
                        pool
                          .query(queryText)
                          .then((dbResponse) => {
                            const age5564 = dbResponse.rows[0].count;
                            const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '65-74';`;
                            pool
                              .query(queryText)
                              .then((dbResponse) => {
                                const age6574 = dbResponse.rows[0].count;
                                const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '75 years of age or greater';`;
                                pool
                                  .query(queryText)
                                  .then((dbResponse) => {
                                    const age75 = dbResponse.rows[0].count;

                                    res.send({
                                      age18: age18,
                                      age1824: age1824,
                                      age2534: age2534,
                                      age3544: age3544,
                                      age4554: age4554,
                                      age5564: age5564,
                                      age6574: age6574,
                                      age75: age75,
                                    });
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                    res.sendStatus(500);
                                  });
                              })
                              .catch((err) => {
                                console.log(err);
                                res.sendStatus(500);
                              });
                          })
                          .catch((err) => {
                            console.log(err);
                            res.sendStatus(500);
                          });
                      })
                      .catch((err) => {
                        console.log(err);
                        res.sendStatus(500);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    res.sendStatus(500);
                  });
              })
              .catch((err) => {
                console.log(err);
                res.sendStatus(500);
              });
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

// GET route to get count for each ethnicity
router.get(
  '/ethnicity',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'American Indian or other Native American';`;
    pool
      .query(queryText)
      .then((dbResponse) => {
        const indian = dbResponse.rows[0].count;
        const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'Asian, Asian American, or Pacific Islander';`;
        pool
          .query(queryText)
          .then((dbResponse) => {
            const asian = dbResponse.rows[0].count;
            const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'Mexican or Mexican American';`;
            pool
              .query(queryText)
              .then((dbResponse) => {
                const mexican = dbResponse.rows[0].count;
                const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'multiracial';`;
                pool
                  .query(queryText)
                  .then((dbResponse) => {
                    const multiracial = dbResponse.rows[0].count;
                    const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'Other Hispanic or Latinx';`;
                    pool
                      .query(queryText)
                      .then((dbResponse) => {
                        const otherHispanic = dbResponse.rows[0].count;
                        const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'Puerto Rican';`;
                        pool
                          .query(queryText)
                          .then((dbResponse) => {
                            const puertoRican = dbResponse.rows[0].count;
                            const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'White (non-Hispanic)';`;
                            pool
                              .query(queryText)
                              .then((dbResponse) => {
                                const white = dbResponse.rows[0].count;
                                const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'Other';`;
                                pool
                                  .query(queryText)
                                  .then((dbResponse) => {
                                    const other = dbResponse.rows[0].count;
                                    const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'I prefer not to answer';`;
                                    pool
                                      .query(queryText)
                                      .then((dbResponse) => {
                                        const noAnswer =
                                          dbResponse.rows[0].count;
                                        res.send({
                                          indian: indian,
                                          asian: asian,
                                          mexican: mexican,
                                          multiracial: multiracial,
                                          otherHispanic: otherHispanic,
                                          puertoRican: puertoRican,
                                          white: white,
                                          other: other,
                                          noAnswer: noAnswer,
                                        });
                                      })
                                      .catch((err) => {
                                        console.log(err);
                                        res.sendStatus(500);
                                      });
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                    res.sendStatus(500);
                                  });
                              })
                              .catch((err) => {
                                console.log(err);
                                res.sendStatus(500);
                              });
                          })
                          .catch((err) => {
                            console.log(err);
                            res.sendStatus(500);
                          });
                      })
                      .catch((err) => {
                        console.log(err);
                        res.sendStatus(500);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    res.sendStatus(500);
                  });
              })
              .catch((err) => {
                console.log(err);
                res.sendStatus(500);
              });
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

/**
 * POST route template
 */
// router.post(
//   '/',
//   (req: Request, res: Response, next: express.NextFunction): void => {
//     // POST route code here
//   }
// );

export default router;
