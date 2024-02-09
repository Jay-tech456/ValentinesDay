

import express from "express"
import fs from "fs"
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filepath = path.join(__dirname, "index.html");

const app = express()
const port = 3000


app.get('/', function(req, res){
  console.log(filepath)
  // res.sendFile(filepath)
})

app.listen(port, () => {

  console.log(`Listening on port ${port}`)
})
