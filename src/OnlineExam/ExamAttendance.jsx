import React from 'react';
import { useParams } from 'react-router-dom';

const ExamAttendance = () => {
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle exam submission here

    // Redirect to the exam report page after successful submission
    // You can pass the exam ID as a URL parameter
    // history.push(`/exams/${id}/report`);
  };

  return (
    <div>
      <h2>Attend Exam {id}</h2>
      <form onSubmit={handleSubmit}>
        {/* Render the exam questions and answer options here */}
        <button type="submit">Submit Exam</button>
      </form>
    </div>
  );
};

export default ExamAttendance;
