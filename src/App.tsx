import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
