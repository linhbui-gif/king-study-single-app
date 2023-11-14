import React, {useCallback, useEffect} from 'react';

import SEO from '@/components/SEO';
import GuestLayout from '@/layouts/GuestLayout';
import { useRouter } from 'next/router';
import CarouselHome from "@/containers/CarouselHome";
import FilterHome from "@/containers/FilterHome/FilterHome";
import About from "@/containers/About";
import Contact from "@/containers/Contact";
import Country from "@/containers/Country";
import Review from "@/containers/Review";
import Event from "@/containers/Event";
import {dispatch} from "rxjs/internal-compatibility";
import {EGetCommonAction, getCommonAction} from "@/redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "@/redux/reducers";
import {Skeleton} from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const getListCommon= useCallback(() => {
    dispatch(getCommonAction.request({}));
  }, [dispatch]);
  const loading = useSelector((state: TRootState) => state.loadingReducer[EGetCommonAction.GET_COMMON]);
  const data = useSelector((state:TRootState) => state.CommonReducer.getCommonResponse);
  useEffect(() => {
    getListCommon();
  }, [dispatch, getListCommon]);
  return (
    <div className="Home">
      <div className="Home-wrapper">
        {loading ? <Skeleton /> : (
          <>
            <CarouselHome/>
            <FilterHome />
            <About />
            <Contact />
            <Country />
            <Review />
            <Event />
          </>
        )}
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
