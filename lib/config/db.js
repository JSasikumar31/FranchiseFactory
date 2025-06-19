import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://sasikumar0:Gblr0i3E8ppcQ9lx@cluster0.yvqkk7w.mongodb.net/Franchise')
 console.log("db connected");

}