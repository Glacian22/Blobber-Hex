const axios = require("axios");
const router = require("express").Router();

router.get("/api2", (req: any, res: any) => {
  res.json({msg: 'ummmm, what up'})
});

export default router;