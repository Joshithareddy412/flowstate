import dotenv from "dotenv";
import { app } from "./src/app.js";
import { connectDB } from "./src/db.js";
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();

const port = process.env.PORT || 3000;

connectDB()

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});