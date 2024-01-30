import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <div className="mx-5 flex h-screen flex-col justify-between p-5 md:mx-24 md:py-10 lg:mx-80 xl:mx-96">
    <Header />
    <main className="mx-auto"></main>
    <Footer />
  </div>
);
export default App;
