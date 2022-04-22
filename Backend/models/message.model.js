const mongoose = require('mongoose');

const messagesSchema = mongoose.Schema({
    content: { type: String, required: true },
    sender : { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    chat : { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    readBy : [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
},
{
    versionKey: false,
    timestamps: true,
});

const Message = mongoose.model("Message", messagesSchema);
module.exports = Message;