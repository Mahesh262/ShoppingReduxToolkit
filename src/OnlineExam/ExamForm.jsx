import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ExamForm = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here

    // Save exam data to localStorage or make an API call to store the data
    const examData = { title };
    const exams = JSON.parse(localStorage.getItem('exams')) || [];
    exams.push(examData);
    localStorage.setItem('exams', JSON.stringify(exams));

    // Navigate to the exam list page after successful creation
    navigate('/exams');
  };

  return (
    <div>
      <h2>Create Exam</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Exam Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
      <button onClick={() => navigate('/exams')}>Back to Exam List</button>
    </div>
  );
};

export default ExamForm;
