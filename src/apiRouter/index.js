import express from "express"
import swaggerDocsRouter from "../swaggerDocsRouter"
import {getImages} from "../controllers/images"
import {postImages} from "../controllers/images"

const apiRouter = express.Router()

apiRouter
.get("/images", getImages)
.post("/images", postImages)
.use("/", swaggerDocsRouter)

export default apiRouter;