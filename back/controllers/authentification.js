const express = require('express');
const bcrypt = require('bcrypt');
var jwt=require('express-jwt');
const saltRounds = 10;

function createRouter(db) 
{
  const router = express.Router();
  const owner = '';


/*
*
*
*
* Club CRUD
*
*
*
*/


/* To Do: 
* Configure JSON Web Token 
*/
router.use("/api/login",jwt({
    secret: 'hello world !',
    credentialsRequired: false,algorithms: ['HS256']}));
router.post('/api/login', function (req, res, next) {
    db.query(
      'SELECT * FROM club where email = ?',
      [req.body.email],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error','error':error});
        } 
        else 
        {
          if(results.length==1&& bcrypt.compareSync(req.body.password,results[0].password))
            res.status(200).json(results[0]);
            else res.status(401).json({status:'error',error:"Wrong Credentials"});
        }
      }
    );
  });

  router.post('/api/logout', function (req, res, next) {
    db.query(
      'SELECT * FROM club where email = ?',
      [req.body.email],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error','error':error});
        } 
        else 
        {
            res.status(500).json({status: 'error','error':"Not Implemented Yet"});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;