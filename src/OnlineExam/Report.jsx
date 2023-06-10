import React from 'react';
import { useParams } from 'react-router-dom';

const Report = () => {
  const { id } = useParams();

  // Fetch the exam results based on the exam ID
  // You can make an API call to retrieve the results

  return (
    <div>
      <h2>Exam Report {id}</h2>
      {/* Render the exam results here */}
    </div>
  );
};

export default Report;
