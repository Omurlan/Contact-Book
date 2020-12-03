
import './App.css';
import ContactsContextProvider from './Context/ContactsContext';
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <ContactsContextProvider>
        <Routes />
      </ContactsContextProvider>
    </div>
  );
}

export default App;
