import express from "express"
import ENV from "./config/env.js"

const port = ENV.PORT || 5001
const app = express()


app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})