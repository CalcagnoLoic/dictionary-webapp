import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchContainer from "../../container/SearchContainer";

const Pages = () => (
  <div className="mx-5 flex min-h-screen flex-col p-5 md:mx-24 md:py-10 lg:mx-64 2xl:mx-96">
    <div className="flex-grow">
      <Header />
      <SearchContainer />
    </div>

    <Footer />
  </div>
);
export default Pages;
