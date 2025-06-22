 
import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function server() {
  try {
    // Connect Database -- here
      //  await mongoose.connect(config.database_url);
       await mongoose.connect("mongodb://localhost:27017/mangoApp");

       console.log("mongodb connected")
    app.listen(config.port, () => {
      console.log(`✅ Server running on port ${config.port}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
  }
}

server();