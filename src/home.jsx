import React, { useState, useEffect } from "react";
import "./home.css";
import { RiTwitterXFill } from "react-icons/ri";
import success from "./assets/success.gif";
const wordList = [
  "PARADOX",
  "GLITCH",
  "SECRET",
  "MIRROR",
  "HIDDEN",
  "TRANCE",
  "TRUST",
  "ILLUSION",
  "DREAM",
  "MYSTERY",
  "ENIGMA",
  "WHISPER",
  "FANTASY",
  "ECHO",
  "SHADOW",
  "VISION",
  "FABLE",
  "RIDDLE",
  "SPECTER",
  "PHANTOM",
  "SILHOUETTE",
  "LABYRINTH",
  "OBSCURE",
  "ENCHANT",
  "SPELLBOUND",
  "SURREAL",
  "TRANSCEND",
  "UNVEIL",
  "REVEAL",
  "AWAKEN",
  "UNLOCK",
  "EXPOSE",
  "DISCOVER",
  "UNRAVEL",
  "DECODE",
  "TRANSLATE",
  "INTERPRET",
  "UNFOLD",
  "UNCOVER",
  "EXPOSE",
  "DECRYPT",
  "UNVEIL",
  "UNLOCK",
  "REVEAL",
  "AWAKEN",
  "UNRAVEL",
  "DECODE",
  "TRANSLATE",
  "INTERPRET",
  "UNFOLD",
  "UNCOVER",
  "EXPOSE",
  "DECRYPT",
  "UNVEIL",
  "UNLOCK",
  "REVEAL",
  "AWAKEN",
  "UNRAVEL",
  "DECODE",
  "TRANSLATE",
  "INTERPRET",
  "UNFOLD",
  "UNCOVER",
  "EXPOSE",
  "DECRYPT",
  "UNVEIL",
];

export const App = () => {
  const [word, setWord] = useState("");
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }

  useEffect(() => {
    pickRandomWord();
  }, []);

  const pickRandomWord = () => {
    const random = wordList[Math.floor(Math.random() * wordList.length)];
    setWord(random);
    setInput("");
    setStatus("");
  };

  const handleSubmit = () => {
    if (input.toUpperCase() === word) {
      setStatus("correct");
      setTimeout(() => pickRandomWord(), 1500);
    } else {
      setStatus("wrong");
      setTimeout(() => setStatus(""), 500);
    }
  };
  return (
    <div className="df fdc aic gap-20 app">
      <div className="w100 df fdc aic gap-10 title">
        <h1>Hypno Word</h1>
        <p>Can you guess the word?</p>
        <p>Type your guess and hit Enter!</p>
      </div>
      <div className="background" />
      <div className="hypno-box">
        <h2>What is the word?</h2>
        <div className={`hypno-word ${status}`}>
          {word.split("").map((char, i) => (
            <span key={i} className={`glitch  ${status}`}>
              {char}
            </span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Your guess"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button onClick={handleSubmit}>Guess</button>
        {status === "correct" && <p className="result success">✅ Correct!</p>}
        {status === "correct" && (
          <img src={success} alt="success" className="success-img" />
        )}
        {status === "wrong" && <p className="result error">❌ Try Again!</p>}
      </div>

      <div className="df fdc aic gap-10 footer">
        <a
          href="http://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="df aic gap-15 btn-link"
        >
          <RiTwitterXFill /> Contact Us
        </a>
        <p> © 2025 Hypno Word. All rights reserved.</p>
      </div>

      <div
        className={`w100 df aic jcc loader ${isLoading ? "loading" : ""}`}
      ></div>
    </div>
  );
};
