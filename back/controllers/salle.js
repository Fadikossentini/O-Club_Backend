const express = require('express');


function createRouter(db) 
{
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.get('/api/salle/:id', function (req, res, next) {
    db.query(
      'SELECT * FROM salle where ID_TYPE = ?',
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

/*
*
*
*
* Salle CRUD
*
*
*
*/

  router.get('/api/salle/:id', function (req, res, next) {
    db.query(
      'SELECT * FROM salle where ID_TYPE = ?',
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
  
    router.post('/api/salle', function (req, res, next) {
      db.query(
        'insert into salle values  (0,?,?,?,?,?)',
        [req.body.nom,req.body.capacite,req.body.description,req.body.intervalle_res,req.body.duree_max],
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


    router.put('/api/salle/:id', function (req, res, next) {
      db.query(
        'update salle set values  nom=?,capacite=?,description=?,intervalle_res=?,duree_max=? where id_type=?',
        [req.body.nom,req.body.capacite,req.body.description,req.body.intervalle_res,req.body.duree_max,
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

    router.delete('/api/salle/:id', function (req, res, next) {
      db.query(
        'delete from salle where id_type=?',
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

    router.put('/api/salle', function (req, res, next) {
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