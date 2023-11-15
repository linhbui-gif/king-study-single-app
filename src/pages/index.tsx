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
import {EGetCommonAction, getCommonAction} from "@/redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {TRootState} from "@/redux/reducers";
import {Skeleton, Spin} from "antd";

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
        <CarouselHome loading={true} data={data}/>
        <FilterHome />
        <About loading={true} data={data}/>
        <Contact loading={true} data={data}/>
        <Country loading={true} data={data} />
        <Review loading={loading}/>
        <Event loading={loading} />
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
