import logo from './logo.svg';
import './App.css';
import { Contact, Footer, Intro, Navbar, Portfolio, ScrollToTopButton, Services } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTopButton />
      <Intro />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
