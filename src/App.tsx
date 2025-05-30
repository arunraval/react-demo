import "./App.css";
import Header from "./components/Header";
import TalentPage from "./components/TalentPage";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        {/* Other components of your app */}
        <TalentPage />
      </div>
    </LanguageProvider>
  );
}

export default App;
