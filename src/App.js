import React from 'react';
import Footer from './COMPONENTS/Footer';
import Header from './COMPONENTS/Header';
import Navbar from './COMPONENTS/Navbar';
import ToDoList from './COMPONENTS/ToDoList';

const App = () => {
  return (
    <body>
      <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />
        <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <hr class="mt-4" />
          <ToDoList />
          <hr class="mt-4" />
          <Footer />
        </div>
      </div>
    </body>
  );
};

export default App;