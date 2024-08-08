import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      process.env.DB_URL,
      {
        appName: "suby",
      }
    )
    .then(() => console.log("DataBase Connected"))
    .catch((err) => {
      console.log("Error while connecting to db ", err);
    });
};
