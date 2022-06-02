import React from "react";
import Header from "/src/components/layout/header/header";
import MainPage from "/src/components/pages/mainpage/mainpage";
import Footer from "/src/components/layout/footer/footer";
import "./style.css";

function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage {...prop} />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
