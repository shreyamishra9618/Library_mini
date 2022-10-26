const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
    // console.log("hello");
    fs.readFile("./db/books.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        res.json(JSON.parse(data));
      }
    });
  });
  router.post("/", (req, res) => {
    console.log(req.body);
    // animals.push(req.body);
    fs.readFile("./db/books.json", "utf-8", (err, data) => {
      if (err) {
        throw err;
      } else {
        const booksArr = JSON.parse(data);
        booksArr.push(req.body);
        console.log(booksArr);
        fs.writeFile(
          "./db/books.json",
          JSON.stringify(booksArr,null,4),
          (err, data) => {
            if (err) {
              throw err;
            }
            res.send("book added!");
          }
        );
      }
    });
  });
  
  //GET to /1, grabs that animal by ID
//   router.get("/:animalId", (req, res) => {
//     for (let i = 0; i < animals.length; i++) {
//       const thisAnimal = animals[i];
//       if (thisAnimal.id == req.params.animalId) {
//         return res.json(thisAnimal);
//       }
//     }
//     return res.status(404).send("no such animal!");
//   });
// GET to , sends back an array of animals


// app.delete("/:animalId",(req,res)=>{
//     res.send("delete request recieved!")
// })
// app.put("/:animalId",(req,res)=>{
//     res.send("put request recieved")
// })

module.exports = router;