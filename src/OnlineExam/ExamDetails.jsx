import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ExamDetails = () => {
  const { id } = useParams();
  // Retrieve the specific exam data based on the id from localStorage or API

  const handleAttendExam = () => {
    // Handle the logic to attend the exam
  };

  return (
    <div>
      <h2>Exam Details</h2>
      <p>Exam ID: {id}</p>
      {/* Render additional exam details */}
      <button onClick={handleAttendExam}>Attend Exam</button>
      <Link to={`/exams/${id}/report`}>View Report</Link>
    </div>
  );
};

export default ExamDetails;
