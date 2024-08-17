import FileUploaderModel from "../../model/fileUploaderModel/index.js";

const FileUploaderController = {
  saveDocument: async (request, response) => {
    try {
      const { fileName, fileDescription } = request.body;
      const fileUrl = request.file ? request.file.path : "";
      await FileUploaderModel.create({
        fileName,
        fileDescription,
        fileUrl,
      });
      response.json({ message: "File uploaded sucessfully!", status: 1 });
    } catch (error) {
      response.json({
        message: "Something went wrong document not uploaded!",
        status: 1,
        error,
      });
      console.error("Something went wrong:", error);
    }
  },
};
export default FileUploaderController
