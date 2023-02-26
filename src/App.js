import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import store from './store'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import AnimatedRoutes from 'hocs/routes/Routes';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Centro Reino da Mata | Dashboard</title>
        <meta name="description" content="Instituto de Investigación y Formación Afro-umbandista." />
        <meta name="keywords" content='instituto, educación on-line, cultura, religión, umbanda, quimbanda, cursos.' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://www.centroumbandistareinodamata.com/" />
        <meta name="author" content='Reino da Mata' />
        <meta name="publisher" content='Reino da Mata' />
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatedRoutes/>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
