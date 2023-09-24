const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    let queryString = 'SELECT id, feeling, understanding, support, comments, flagged FROM "feedback" ORDER BY "date";';
    pool.query(queryString)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error getting feedback', error);
      res.sendStatus(500);
    });
  });

router.post('/', (req, res) => {
    const postFeedback = req.body;
    console.log(postFeedback);
    const queryString =   `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4)`;
    const queryValues = [
        postFeedback.feeling,
        postFeedback.understanding,
        postFeedback.support,
        postFeedback.comments,
    ];
    pool.query(queryString, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((error) => {
      console.log('Error in POST route', error);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req,res) => {
  let listId = req.params.id;
  console.log(listId);
  let queryString = 'DELETE FROM "feedback" WHERE "id" = $1;';
  pool.query(queryString, [listId])
  .then((result) => {
      res.sendStatus(200);
  })
  .catch((error) => {
      console.log(`Error making query ${queryString}`, error);
      res.sendStatus(500);
  });
});

module.exports = router;