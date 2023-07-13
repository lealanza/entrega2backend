import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
    await mongoose.connect("mongodb+srv://entrega2:entrega2backend@cluster0.llmsoiq.mongodb.net/");
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }

}