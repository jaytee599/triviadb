import { useState, useEffect } from 'react';

const Question = () => {
  const [data, setData] = useState({ category: '', question: '', answer: '' });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean');
      const result = await response.json();
      const { category, question, correct_answer: answer } = result.results[0];
      setData({ category, question, answer });
    };

    fetchQuestion();
  }, []);

  return (
    <div>
      <div>{data.category}</div>
      <h3>{data.question}</h3>
      {revealed && <div>{data.answer}</div>}
      <button onClick={() => setRevealed(true)}>Reveal answer</button>
    </div>
  );
};

export default Question;
