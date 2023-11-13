import React from 'react';

import SEO from '@/components/SEO';
import GuestLayout from '@/layouts/GuestLayout';
import { useRouter } from 'next/router';
import CarouselHome from "@/containers/CarouselHome";
import FilterHome from "@/containers/FilterHome/FilterHome";
import About from "@/containers/About";
import Contact from "@/containers/Contact";
import Country from "@/containers/Country";
import Review from "@/containers/Review";

const Home = () => {
  const router = useRouter();

  return (
    <div className="Home">
      <div className="Home-wrapper">
        <CarouselHome />
        <FilterHome />
        <About />
        <Contact />
        <Country />
        <Review />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <GuestLayout>{page}</GuestLayout>
    </>
  );
};
