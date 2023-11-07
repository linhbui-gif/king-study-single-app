import React from 'react';

import SEO from '@/components/SEO';
import GuestLayout from '@/layouts/GuestLayout';
import { useRouter } from 'next/router';
import CarouselHome from "@/containers/CarouselHome";
import FilterHome from "@/containers/FilterHome/FilterHome";

const Home = () => {
  const router = useRouter();

  return (
    <div className="Home">
      <div className="Home-wrapper">
        <CarouselHome />
        <FilterHome />
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
