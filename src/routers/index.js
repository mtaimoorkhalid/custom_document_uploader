import { Router } from "express";
import FileUploadRouter from "./fileUploaderRouter/index.js";
const AllRoutes = Router();
AllRoutes.use(FileUploadRouter);
export default AllRoutes;
