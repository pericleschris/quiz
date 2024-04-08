"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/button";
import styles from "@/components/card.module.css";
import { questions } from "@/questions";
import Thanks from "@/components/thanks";

export default function Card() {
  const [currentQuestion, setCurrentQuestion] = React.useState<number | null>(0);
  const [answers, setAnswers] = React.useState<{ [key: number]: string }>({});
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  function handleOptionChange(character: string) {
    setSelectedOption(character);
  }

  function handleClick() {
    if (selectedOption) {
      setAnswers({ ...answers, [currentQuestion!]: selectedOption });
      if (currentQuestion !== null && currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setCurrentQuestion(null);
      }
    }
  }

  interface CharacterCounts {
    [character: string]: number;
  }

  function calculateResult(): string {
    const characterCounts: CharacterCounts = {};
    questions.forEach((question, index) => {
      const selectedCharacter = answers[index];
      if (selectedCharacter) {
        if (characterCounts[selectedCharacter]) {
          characterCounts[selectedCharacter]++;
        } else {
          characterCounts[selectedCharacter] = 1;
        }
      }
    });
    let maxCount = 0;
    let resultCharacter = "";
    for (const character in characterCounts) {
      if (characterCounts[character] > maxCount) {
        maxCount = characterCounts[character];
        resultCharacter = character;
      }
    }
    return resultCharacter;
  }

  const result = currentQuestion === null ? calculateResult() : null;

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
              <div key={index} className={styles.cardOptionItem}>
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
        <Thanks result={result!} />
      )}
    </div>
  );
}
