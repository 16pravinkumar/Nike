import { useState } from "react";
import {
  PopularProducts,
  CustomerReviews,
  SupperQuality,
  Services,
  SpecialOffer,
  Subscribe,
  Footer,
} from "./sections/";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="relative ">
      <Navbar/>
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero/>
        </section>

        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SupperQuality />
        </section>
        <section className="padding-x">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className=" bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding-x padding-t pb-8 bg-black ">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
