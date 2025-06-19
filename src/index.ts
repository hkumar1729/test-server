import express from 'express'

const app = express();

app.get('/', (req, res)=>{
    res.json({
        msg: "Sever status: Healthy"
    })
})

app.listen(3001);