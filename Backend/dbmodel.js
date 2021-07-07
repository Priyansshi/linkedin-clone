import mongoose from "mongoose"

const linkedschema = mongoose.Schema({
    name : String,
    descripation:String,
    message: String,
    image : String,
})
export default mongoose.model("post",linkedschema);