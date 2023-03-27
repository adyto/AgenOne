import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, Project } from './components';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
};

export default App;
