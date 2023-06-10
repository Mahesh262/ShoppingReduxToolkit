import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./OnlineExam/Home";
import ExamList from "./OnlineExam/ExamList";
import ExamDetails from "./OnlineExam/ExamDetails";
import ExamForm from "./OnlineExam/ExamForm";
import ExamAttendance from "./OnlineExam/ExamAttendance";
import Report from "./OnlineExam/Report";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ExamList />} />
      <Route path="*" element={<Home />} />
      <Route path="/exams/create" element={<ExamForm />} />
      <Route path="/exams/:id" element={<ExamDetails />} />
      <Route path="/exams/:id/attend" element={<ExamAttendance />} />
      <Route path="/exams/:id/report" element={<Report />} />
    </Routes>
  );
};

export default App;
