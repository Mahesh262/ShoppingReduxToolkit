import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ExamList = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const storedExams = JSON.parse(localStorage.getItem('exams')) || [];
    setExams(storedExams);
  }, []);

  return (
    <div>
      <h2>Exam List</h2>
      {exams.length === 0 ? (
        <p>No exams available</p>
      ) : (
        <ul>
          {exams.map((exam, index) => (
            <li key={index}>
              <Link to={`/exams/${index}`}>{exam.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/exams/create">Create Exam</Link>
    </div>
  );
};

export default ExamList;
