import express from 'express';
import cors from 'cors';

import { mangoRoute } from './modules/mango/mango.route';
import userRoute from './modules/user/user.route';
 

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/user", userRoute);
app.use("/mango", mangoRoute);

// Root Route
app.get('/', (req, res) => {
  res.send({ success: true, message: `Server is Live ⚡` });
});

export default app;