const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://hackoverflow:OiJEy66qiTyMBBJY@cluster0.1qrkdws.mongodb.net/UserInfo"
);

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: Boolean
});

const todo = mongoose.model('user', todoSchema);
module.exports = {
    todo
};