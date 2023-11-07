import express from "express";
import helmet from "helmet";
import compression from "compression";
import path from "path";

const port = 3000;
const app = express();
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.static("./static"))

app.get("/", (req, res) => {
    const pathToIndex = path.resolve("./index.html")
    return res.sendFile(pathToIndex)    //Will use 3000 and not port 80 
})

app.listen(port, () => {
    console.log(`I'm a server running on port ${port}`)
})