import { useState } from "react";
import FILEICON from "../assets/file.png";

const FileInput = ({ name }) => {


    const [fileName,setFileName] = useState("");

  return (
    <>
      <label>
        <div className="h-150px w-full flex flex-col items-center justify-center bg-blue-100 rounded-md p-4">
        <img src={FILEICON} className="h-[25px] w-auto"></img>
        <p className="text-sm">Click here to upload files</p>
        <p>{fileName}</p>
        </div>
        <input
          type="file"
          id="file"
          className="h-[45px] w-auto p-2 border hidden"
          name={name}
          onChange={(e) => setFileName(e.target?.files[0]?.name)}
        ></input>
      </label>
    </>
  );
};

export default FileInput;
