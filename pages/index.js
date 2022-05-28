import React from "react";
import ContentAiring from "./components/contentAiring";
import ContentPopular from "./components/contentPopular";
import Footer from "./components/footer";
import Header from "./components/header";
import Landing from "./components/landing";

export default function home() {
   return (
      <>
         <Header />
         <Landing />
         <ContentPopular />
         <ContentAiring />
         <Footer />
      </>
   );
}
