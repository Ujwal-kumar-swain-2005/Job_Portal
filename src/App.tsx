import './App.css';
import Home from './Page/HomePage';
import FindJobs from './Page/FindJobs';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import FindTalent from './Page/FindTalent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import TalentProfile from './Page/TalentProfile';

import PostJobPage from './Page/JobPostPage';

function App() {

  const theme = createTheme({
    primaryColor: 'bright-sun',
    primaryShade: 4,

    colors: {
      'mine-shaft': [
        '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888',
        '#6d6d6d', '#5d5d5d', '#4f4f4f', '#3d3d3d', '#2d2d2d'
      ],

      'bright-sun': [
        '#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20',
        '#f99b07', '#dd7302', '#b75006', '#943c0c', '#461902'
      ],
    }
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path = "/find-talent" element ={<FindTalent />} />
          <Route path = "/post-job" element ={<PostJobPage />} />
          <Route path='/find-profile' element ={<TalentProfile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
