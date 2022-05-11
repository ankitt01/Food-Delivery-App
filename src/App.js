import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import {Header, MainContainer, CreateContainer} from './components';

function App() {
  return (
    <AnimatePresence>
      <div className='w-screen h-auto flex bg-primary'>
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
            <Routes>
              <Route path="/*" element={<MainContainer />} />
              <Route path="/createItem" element={<CreateContainer />} />
            </Routes>
          </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
