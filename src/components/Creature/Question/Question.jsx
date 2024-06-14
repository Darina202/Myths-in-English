import React, { useState } from 'react';
import styles from './question.module.css';
import { Link } from 'react-router-dom';

const Questions = ({ test }) => {
  const [checked, setChecked] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});

  const checkQuestions = ev => {
    ev.preventDefault();

    const correct = {};
    test.forEach((question, qIndex) => {
      question.variants.forEach((variant, vIndex) => {
        if (variant.flag) {
          correct[qIndex] = vIndex;
        }
      });
    });

    setChecked(true);
    setCorrectAnswers(correct);
  };

  const handleOptionChange = (qIndex, vIndex) => {
    setSelectedAnswers(prevSelectedAnswers => ({
      ...prevSelectedAnswers,
      [qIndex]: vIndex,
    }));
  };

  const questions = test.map((el, qIndex) => {
    const variants = el.variants.map((variant, vIndex) => {
      const isChecked = selectedAnswers[qIndex] === vIndex;
      const isCorrect = correctAnswers[qIndex] === vIndex;

      return (
        <div className={styles.row} key={vIndex}>
          <input
            type="radio"
            name={`question_${qIndex}`}
            className={styles.input}
            id={`question_${qIndex}_variant_${vIndex}`}
            checked={isChecked}
            onChange={() => handleOptionChange(qIndex, vIndex)}
          />
          {/* <span
            className={styles.radioBtn}
            style={{ backgroundColor: '#8FA1D0' }}
          ></span> */}
          <label
            htmlFor={`question_${qIndex}_variant_${vIndex}`}
            style={{
              color: checked
                ? isCorrect
                  ? 'green'
                  : 'rgba(0, 0, 0, 0.5)'
                : 'black',
            }}
          >
            {variant.title}
          </label>
        </div>
      );
    });

    return (
      <div key={qIndex}>
        <h3 className={styles.title}>{el.title}</h3>
        <div className={styles.variants}>{variants}</div>
      </div>
    );
  });

  return (
    <div>
      <h2>{test.title}</h2>
      {questions}
      <div className={styles.buttons}>
        <Link to="/gallery" className={styles.checkBtn}>
          To gallery
        </Link>
        {/* <button type="button" className={styles.checkBtn}>
          Go back
        </button> */}
        <input
          type="button"
          className={styles.checkBtn}
          disabled={checked}
          value="Check"
          onClick={checkQuestions}
        />
      </div>
    </div>
  );
};

export default Questions;
