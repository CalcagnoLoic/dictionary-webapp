import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchWord from "./container/SearchWord";

const App = () => (
  <div className="mx-5 flex h-screen flex-col justify-between p-5 md:mx-24 md:py-10 lg:mx-80 2xl:mx-96">
    <Header />
    <SearchWord />
    <Footer />
  </div>
);
export default App;
