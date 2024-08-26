/**
 * @description The main App component. It renders all the components that are present on the main page of the website.
 * @returns {JSX.Element} The App component.
 */
import "./App.css";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Billboard from "@/components/billboard/billboard";
import Featured from "@/components/featured/Featured";
import BestDealsGrid from "@/components/bestDeals/BestDealsGrid";
import BigDeals from "@/components/bigDeals/BigDeals";
import BestSellers from "@/components/bestSellers/BestSellers";
import SaleBanner from "@/components/saleBanner/SaleBanner";
import RecentlyViewed from "@/components/recentlyViewed/RecentlyViewed";
import QuickView from "@/components/quickView/QuickView";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Footer from "@/components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Billboard />
      <BigDeals />
      <Featured />
      <BestDealsGrid />
      <BestSellers />
      <SaleBanner />
      <RecentlyViewed />
      <QuickView />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
