"use client"; // Mark as a Client Component
import { useState } from "react";

export default function geminiText() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (response.ok) {
        setOutput(data.output); // Display the Gemini response
      } else {
        setOutput("Error: " + data.error);
      }
    } catch (error) {
      setOutput("Error: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Gemini API Demo</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        rows={4}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button
        onClick={generateText}
        disabled={loading}
        style={{ padding: "10px 20px", marginBottom: "20px" }}
      >
        {loading ? "Generating..." : "Generate"}
      </button>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          minHeight: "100px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {output ? output : "Your Gemini response will appear here..."}
      </div>
    </main>
  );
}