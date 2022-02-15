import  mongoose  from "mongoose";

const todoSchema = new mongoose.Schema({
    title: String,
    content: String,
    completed: Boolean,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
