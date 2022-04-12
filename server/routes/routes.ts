const axios = require("axios");
const router = require("express").Router();

router.get("/api", (req: any, res: any) => {
  res.json({msg: 'all good amigo'})
});

export default router;