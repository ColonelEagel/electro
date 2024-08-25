import "./App.css";
import Header from "@/components/header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Billboard from "@/components/billboard/billboard";
import BigDeals from "@/components/bigDeals/BigDeals";
import Featured from "@/components/featured/Featured";
import RecentlyViewed from "@/components/recentlyViewed/RecentlyViewed";
import BestSellers from "@/components/bestSellers/BestSellers";
import Footer from "@/components/footer/Footer";

function App() {
  return (
    <>
      {/* //FIXME: Fix Responsive */}
      <Header />
      <Navbar />
      <Billboard />
      <BigDeals />
      <Featured />
      {/* //todo Best Deals */}
      <BestSellers />
      <RecentlyViewed />
      <Footer />
    </>
  );
}

export default App;
