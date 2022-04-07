const axios = require("axios");
const router = require("express").Router();

router.get("/api", (req: any, res: any) => {
  console.log('BOOOOOOOOOOOOOOOOOOOOOO')
  res.json({msg: 'all good amigo'})
});

module.exports = router;