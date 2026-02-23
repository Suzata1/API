import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    name: {
        type: String,},
        file:{
            type: Object,
        }
});
const Document = mongoose.model("Document", documentSchema);
export default Document;
