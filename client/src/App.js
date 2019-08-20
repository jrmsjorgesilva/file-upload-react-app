import React from 'react';
import './App.css';
import FileUpload from './components/FileUpload';

const App = () => {
  return (
    <div className="container mt-4">
      <h4 className='display-4 text-center mb-4'>
        <i className='fab fa-react' /> Traversy Uploading knowledge
      </h4>
      <FileUpload />
    </div>
  );
}

export default App;
