const router = require("express").Router();

router.post("/api/submitMoves", (req: any, res: any) => {
  console.log(req.body)
  const {id, moves} = req.body;
  res.json({msg: `player ${id} made these moves: ${moves}`})
});

export default router;