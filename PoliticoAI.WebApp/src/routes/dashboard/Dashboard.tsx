import "./dashboard.css";
import { useAppSelector } from "../../hooks/ReduxHooks";
import { useState } from "react"; // <-- Import useState here
import FileUploader from "../../components/FileUploader/FileUploader";
import TextTranslator from "../../components/Translation/TextTranslator";

function Dashboard(): JSX.Element {
  const { fileContent } = useAppSelector((state) => state.fileInput);

  const buttons = fileContent?.Project.ProjectDashboardButtons;
  //const bottomButtons = fileContent?.Project.ProjectReports;

  console.log(buttons);

  const [inputText, setInputText] = useState(""); // <-- useState hook for inputText

  return (
    <div
      style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}
    >
      <h2>🗳️ Political Speech Translator</h2>
      <FileUploader />

      <br />

      <TextTranslator
        inputText={inputText}
        setInputText={setInputText} // <-- Pass setInputText properly here
      />
    </div>
  );
}

export default Dashboard;
