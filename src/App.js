import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, ProjectItem, ServicesItem } from './components';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicesItem />} />
        <Route path="/project" element={<ProjectItem />} />
      </Routes>
    </>
  );
};

export default App;
