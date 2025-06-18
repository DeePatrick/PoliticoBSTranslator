import { useState, useEffect } from "react";

const mockTranslations = [
  "What I said: 'We are investing in the future.'",
  "What I meant: 'We need votes, so here's a vague promise.'",
  "What I said: 'We're cutting taxes.'",
  "What I meant: 'We're shifting who pays them.'",
  "What I said: 'This reform benefits everyone.'",
  "What I meant: 'Mostly our donors, but you'll get a sticker.'",
];

interface TranslatorProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

function TextTranslator({ inputText, setInputText }: TranslatorProps) {
  const [translatedText, setTranslatedText] = useState("");
  const [liveMode, setLiveMode] = useState(false);
  const [liveIndex, setLiveIndex] = useState(0);

  const handleTranslate = () => {
    setTranslatedText("Translating your political speech... 🤔");
    setTimeout(() => {
      setTranslatedText(
        `"Translation": Politician wants you to feel good, trust them, and not read the fine print.`,
      );
    }, 1000);
  };

  useEffect(() => {
    if (!liveMode) return;

    const interval = setInterval(() => {
      setTranslatedText(mockTranslations[liveIndex % mockTranslations.length]);
      setLiveIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [liveMode, liveIndex]);

  return (
    <>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={5}
        placeholder="Paste a political speech here..."
        style={{ width: "100%", padding: "1rem", fontSize: "1rem" }}
      />

      <div style={{ marginTop: "1rem" }}>
        <button onClick={handleTranslate} style={{ marginRight: "1rem" }}>
          Translate
        </button>
        <label>
          <input
            type="checkbox"
            checked={liveMode}
            onChange={() => {
              setLiveMode(!liveMode);
              setLiveIndex(0);
            }}
          />{" "}
          Mock Live Updates
        </label>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "6px",
          background: "#f9f9f9",
          minHeight: "100px",
        }}
      >
        <strong>Interpreted Translation:</strong>
        <p style={{ marginTop: "0.5rem" }}>{translatedText}</p>
      </div>
    </>
  );
}

export default TextTranslator;
