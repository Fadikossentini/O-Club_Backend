const express = require('express');

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


    router.get('/api/club/:id', function (req, res, next) {
      db.query(
        'SELECT * FROM club where ID_CLUB = ?',
        [req.params.id],
        (error, results) => {
          if (error) {
            console.log(error);
            res.status(500).json({status: 'error','error':error});
          } else {
            res.status(200).json(results[0]);
          }
        }
      );
    });
  
    router.get('/api/club', function (req, res, next) {
      db.query
      (
        'SELECT * FROM club where ID_CLUB = ?',
        [
          req.params.id
        ],
        (error, results) => {
          if (error) {
            console.log(error);
            res.status(500).json({status: 'error','error':error});
          } else {
            res.status(200).json(results[0]);
          }
        }
      );
    });
    
      router.post('/api/club', function (req, res, next) 
      {
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
          db.query(
            'insert into club values  (0,?,?,?,?,?,?,?)',
            [
              req.body.nom,
              req.body.date_fond,
              req.body.description,
              req.body.email,
              req.body.tel,
              req.body.pres,
              hash
            ],
            (error, results) => {
              if (error) {
                console.log(error);
                res.status(500).json({status: 'error','error':error});
              } else {
                res.status(200).json({status:"success"});
              }
            }
          );      });
        
      });
  
  
      router.put('/api/club/:id', function (req, res, next) 
      {
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        db.query(
          'update club set values  nom=?,pres=?,description=?,date_fond=?,email=?,tel=?,password=?, where club_id=?',
          [req.body.nom,req.body.pres,req.body.description,req.body.date_fond,req.body.email,
            request.body.email,request.body.tel,hash,
          req.params.id],
          (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error','error':error});
            } else {
              res.status(200).json({status:"success"});
            }
          }
        );
        });
      });
  
      router.delete('/api/club/:id', function (req, res, next) {
        db.query(
          'delete from club where id_club=?',
          [req.params.id],
          (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error','error':error});
            } else {
              res.status(200).json({status:"success"});
            }
          }
        );
      });
  
      router.put('/api/club', function (req, res, next) {
        db.query(
          'update salle set values  nom=?,capacite=?,description=?,intervalle_res=?,duree_max=? where id_type=?',
          [req.body.nom,req.body.capacite,req.body.description,req.body.intervalle_res,req.body.duree_max,
          req.body.id],
          (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error','error':error});
            } else {
              res.status(200).json({status:"success"});
            }
          }
        );
      });
  
  return router;
}

module.exports = createRouter;