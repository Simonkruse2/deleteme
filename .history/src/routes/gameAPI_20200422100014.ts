import express from "express";
import gameFacade from "../facades/gameFacade";
const router = express.Router();
import { ApiError } from "../errors/apiError";
const {gameArea,players} = require("./../../gameData")


//import * as mongo from "mongodb"
import setup from "../config/setupDB";
import UserFacade from "../facades/userFacadeWithDB";

(async function setupDB() {
  const client = await setup();
  gameFacade.setDatabase(client);
})();

/*
 Create a new polygon meant to be used on clients by React Native's MapView which
 requres an object as the one we create below 
 NOTE --> how we swap longitude, latitude values
*/
const polygonForClient:any = {};
polygonForClient.coordinates = gameArea.coordinates[0].map((point:any) => {
  return {latitude: point[1],longitude: point[0]}
})


//Returns a polygon, representing the gameArea
router.get("/gamearea",(req,res,next)=>{
  try{
  res.json(polygonForClient);
}catch(err){
  next(err)
}
});

router.post("/nearbyplayers", async function(req, res, next) {
  try {
    //Todo call your facade method
    throw new Error("Not Yet Implemented");
  } catch (err) {
    next(err);
  }
});

// Add endpoint where teams can send only POS
router.post("/getPostIfReached", async function(req, res, next) {
  throw new Error("Not yet implemented");
});

module.exports = router;
