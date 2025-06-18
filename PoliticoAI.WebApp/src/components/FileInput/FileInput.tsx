import { useRef, useState } from "react";
import "./file-input.css";

interface FileInputProps {
  onChange: (data: string) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  const [fileContent, setFileContent] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [errorFile, setErrorFile] = useState("");

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
    console.log("file", file.type);

    if (file.type === "application/json") {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (!e.target?.result) {
          return;
        }

        let fileData: string;

        if (typeof e.target.result === "string") {
          fileData = e.target.result;
        } else {
          const decoder = new TextDecoder();
          fileData = decoder.decode(e.target.result);
        }

        setFileContent(fileData);

        onChange(fileData);
      };

      reader.readAsText(file);
    } else {
      setErrorFile(" (Please select a valid JSON File)");
    }
  };

  // Handle file drop
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!event.dataTransfer.files) {
      return;
    }

    const file = event.dataTransfer.files[0];

    if (file.type === "application/json") {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (!e.target?.result) {
          return;
        }

        let fileData: string;

        if (typeof e.target.result === "string") {
          fileData = e.target.result;
        } else {
          const decoder = new TextDecoder();
          fileData = decoder.decode(e.target.result);
        }

        setFileContent(fileData);

        onChange(fileData);
      };

      reader.readAsText(file);
    } else {
      setErrorFile("Please select a valid JSON File.");
    }
  };

  // Prevent default behavior on drag over
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Open file input when button is clicked
  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <div className="file-upload-container">
        <div
          className="drag-drop-area"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={openFileDialog}
        >
          <p className="drag-drop">
            Drag & Drop file here or click to select the file
            {errorFile}
          </p>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileInputChange}
            multiple
            className="file-input"
          />
        </div>
      </div>
      <div>{fileContent}</div>
    </div>
  );
};

export default FileInput;
