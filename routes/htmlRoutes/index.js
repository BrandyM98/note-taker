const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  router.get("/notes", (req, res) => {
    console.log("path = ", path.join(__dirname, '../../public/notes.html') );
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });
  
  // router.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../../public/index.html'));
  // });

module.exports = router;