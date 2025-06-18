import React, { useState, ChangeEvent } from "react";
import { baseApiUrl } from "../../constants";

const FileUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const uploadedFile = e.target.files?.[0];

    if (uploadedFile) {
      const isAudioOrVideo =
        uploadedFile.type.startsWith("audio/") ||
        uploadedFile.type.startsWith("video/");
      if (!isAudioOrVideo) {
        alert("Please upload a valid audio or video file.");
        return;
      }

      setFile(uploadedFile);
      setPreviewURL(URL.createObjectURL(uploadedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("No file selected");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${baseApiUrl}PoliticalBSTranslator/upload`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Transcription:", data);
    setTranscript(data.text);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h4>Upload Audio/Video for Transcription</h4>
      <div style={{ maxWidth: "400px" }}>
        <input
          type="file"
          accept="audio/*,video/*"
          onChange={handleFileChange}
        />
      </div>
      <br />

      {file && (
        <div style={{ marginTop: "10px",  marginBottom: "10px",}}>
          <p>
            <strong>Selected File:</strong> {file.name}
          </p>

          {file.type.startsWith("audio/") && previewURL && (
            <audio controls src={previewURL} />
          )}

          {file.type.startsWith("video/") && previewURL && (
            <video controls width="100%" src={previewURL} />
          )}
        </div>
      )}
      <div>
        <input
          type="button"
          onClick={handleUpload}
          disabled={!file}
          name=" Transcribe"
          value={"Transcribe"}
        />
      </div>

      {transcript && (
        <div style={{ marginTop: "20px" }}>
          <h4>Transcript:</h4>
          <p>{transcript}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
