import problemRouter from "./problems.routes.js";
import express  from 'express';

const v1router = express.Router()

v1router.use('/problems',problemRouter)
export default v1router