import React, { lazy, Suspense } from "react";
import "./PortFoilio/Common/common.scss";

// Import the fallback component

const Loading = () => <div>Loading...</div>;

// Lazy load the component
const Home = lazy(() => import("./PortFoilio/Home"));
const About = lazy(() => import("./PortFoilio/About"));
const Portfolio = lazy(() => import("./PortFoilio/Portfolio"));
const Resume = lazy(() => import("./PortFoilio/Resume"));
const Contact = lazy(() => import("./PortFoilio/Contact"));
const LandingPage = lazy(() => import("./LandingPage"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <LandingPage />
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </Suspense>
    </>
  );
};

export default App;
