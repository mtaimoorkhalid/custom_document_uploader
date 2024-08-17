import Router from "express";
import FileUploaderController from "../../controllers/fileUploaderController/index.js";
const FileUploadRouter = Router();
FileUploadRouter.post("/saveDocument", FileUploaderController.saveDocument);
export default FileUploadRouter;
