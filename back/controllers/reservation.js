const express = require("express");

function createRouter(db) {
  const router = express.Router();
  const owner = "";

  /*
   *
   *
   *
   * Club CRUD
   *
   *
   *
   */

  router.get("/api/reservation/:id", function (req, res, next) {
    db.query(
      "SELECT * FROM reservation where RESERVATION = ?",
      [req.params.id],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ status: "error", error: error });
        } else {
          res.status(200).json(results[0]);
        }
      }
    );
  });

  router.get("/api/reservation", function (req, res, next) {
    db.query(
      "SELECT * FROM reservation where REFERENCE = ?",
      [req.params.id],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ status: "error", error: error });
        } else {
          res.status(200).json(results[0]);
        }
      }
    );
  });

  router.post("/api/reservation", function (req, res, next) {
    db.query(
      "insert into reservation values  (8,?,?,?,?,?,?,?,?)",
      [
        req.body.date_soumission,
        req.body.date_debut,
        req.body.date_fin,
        req.body.etat,
        req.body.nom_event,
        req.body.type_event,
        req.body.id_club,
        req.body.id_type,
      ],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ status: "error", error: error });
        } else {
          res.status(200).json({ status: "success" });
        }
      }
    );
  });

  router.put("/api/reservation/:id", function (req, res, next) {
    db.query(
      "update reservation set values  date_soumission=?,date_debut=?,date_fin=?,etat=?,nom_event=?,id_club=?,id_type=? where reference=?",
      [
        req.body.date_soumission,
        req.body.date_debut,
        req.body.date_fin,
        req.body.etat,
        req.body.nom_event,
        req.body.id_club,
        req.body.id_type,
        req.params.id,
      ],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ status: "error", error: error });
        } else {
          res.status(200).json({ status: "success" });
        }
      }
    );
  });
  router.delete("/api/reservation/:id", function (req, res, next) {
    db.query(
      "delete from reservation where reference=?",
      [req.params.id],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ status: "error", error: error });
        } else {
          res.status(200).json({ status: "success" });
        }
      }
    );
  });

  router.put("/api/reservation", function (req, res, next) {
    db.query(
      "update reservation set values  date_soumission=?,date_debut=?,date_fin=?,etat=?,nom_event=?,id_club=?,id_type=? where reference=?",
      [
        req.body.date_soumission,
        req.body.date_debut,
        req.body.date_fin,
        req.body.etat,
        req.body.nom_event,
        req.body.id_club,
        req.body.id_type,
        req.params.id,
      ],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ status: "error", error: error });
        } else {
          res.status(200).json({ status: "success" });
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;
