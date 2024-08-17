import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const FileUploaderModel = sequelize.define("Files", {
  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fileDescription: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default FileUploaderModel;