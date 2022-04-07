const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req: any, res: any) => {
  res.status = 200;
  res.json({msg: 'all good amigo'})
});

module.exports = router;