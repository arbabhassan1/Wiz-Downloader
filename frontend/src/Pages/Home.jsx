import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import MainSection from "../Components/MainSection";
import Loading from "../Components/Loading";
import Footer from "../Components/Footer";
const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  const [isLoading, setIsLoading] = useState(true);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="w-full max-h-screen overflow-hidden">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;
