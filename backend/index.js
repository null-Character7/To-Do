const express = require("express")
const app = express()
const port = 3000
const cors = require('cors')

app.use(express.json());
app.use(cors());

const { createToDo, updateToDo } = require('./type');
const { todo } = require('./db');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/todo', async (req,res) => {
    const userBody = req.body;
    // const userBodyParser = createToDo.safeParse(userBody);
    const userBodyParser = userBody;
    console.log(req.body)
    // if(!userBodyParser.success){
    //     return res.status(411).send({
    //         message : "Wrong inputs!!!"
    //     })
    //     return;
    // }
    await todo.create({
        title : userBodyParser.title,
        description : userBodyParser.description,
        completed : false
    });
    res.status(200).send({
        message: "todo created"
    })

})

app.get('/todos',async (req,res) => {
    const todos = await todo.find();
    res.json(todos);
})

app.put('/completed',async (req,res) => {
    const userID = req.body;
    // const userIDParser = createToDo.safeParse(userID);
    // if(!userIDParser.success){
    //     return res.status(404).send({
    //         message : "Wrong inputs!!!"
    //     })
    //     return;
    // }
    await todo.updateOne({
        _id : req.body.id
    },
    {
        completed : true
    })
    res.json({
        message :"Updated"
    })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})