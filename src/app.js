import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import path from 'path';
import routes from './router';
import dotenv from 'dotenv';

dotenv.config()
class App {
  constructor() {
    this.server = express()
    mongoose.connect(process.env.DATABASE,{})
    this.middlewares()
    this.routes()
  }

  middlewares(){
    this.server.use(cors())
    this.server.use(
    '/files',
    express.static(path.resolve(__dirname, '..','uploads'))
  )
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
    
  }
}

export default new App().server