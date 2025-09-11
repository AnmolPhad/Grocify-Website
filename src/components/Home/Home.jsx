import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Process from "../Process/Process";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <section id="home" style={{ scrollMarginTop: 40 }}>
        <Hero />
        <Category />
      </section>

      <section id="about" style={{ scrollMarginTop: 40 }}>
        <Values />
      </section>

      <section id="process" style={{ scrollMarginTop: 40 }}>
        <Process />
      </section>

     

      <section id="products" style={{ scrollMarginTop: 40 }}>
        <Products />
        <Discount />
      </section>
       <section id="contact" style={{ scrollMarginTop: 40 }}>
        <Testimonials />
      </section>
    

  
    </>
  );
};

export default Home;
