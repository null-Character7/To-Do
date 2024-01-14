const z = require ("zod");

const createToDo = z.object({
    title: z.string(),
    description : z.string()
});

const updatetoDo = z.object({
    _id: z.string()
});

module.exports = {
    createToDo,
    updatetoDo
};