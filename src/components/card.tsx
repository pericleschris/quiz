"use client";

import React from "react";
import Image from "next/image";
import Button from "./button";
import styles from "@/components/card.module.css";
import { questions } from "@/questions";

export default function Card() {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [answer, setAnswer] = React.useState<{ [key: number]: string }>({});
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  function handleOptionChange(character: string) {
    setSelectedOption(character);
  }

  function handleClick() {
    if (selectedOption) {
      setAnswer({ ...answer, [currentQuestion]: selectedOption });
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }
    }
  }

  return (
    <div>
      {currentQuestion !== null ? (
        <>
          <div className={styles.cardHeader}>
            <p>{questions[currentQuestion].questionText}</p>
          </div>
          <div>
            <Image
              src={`${questions[currentQuestion].image}`}
              alt={`${questions[currentQuestion].questionText}`}
              width={1000}
              height={667}
            />
          </div>
          <div className={styles.cardOptions}>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="options"
                  id={`option-${index}`}
                  value={option.character}
                  checked={selectedOption === option.character}
                  onChange={() => handleOptionChange(option.character)}
                />
                <label htmlFor={`option-${index}`}>{option.optionText}</label>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", padding: "1.25rem 0", textAlign: "center" }}>
            <Button onClick={handleClick}>Confirmar</Button>
          </div>
        </>
      ) : (
        <div>
          <h2>Você é mais parecido com</h2>
        </div>
      )}
    </div>
  );
}
