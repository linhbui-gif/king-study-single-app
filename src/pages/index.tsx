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
import axios from "axios";
import ApiService from "@/services/api";

const Home = ({ initialData }:any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const getListCommon = useCallback(() => {
    dispatch(getCommonAction.request({},{},{}));
  }, [dispatch]);
  const loading = useSelector((state: TRootState) => state.loadingReducer[EGetCommonAction.GET_COMMON]);
  const data = useSelector((state:TRootState) => state.CommonReducer.getCommonResponse);
  useEffect(() => {
    if(initialData){
      dispatch(getCommonAction.success(initialData))
    } else {
      getListCommon();
    }
  }, [dispatch, getListCommon, initialData]);
  return (
    <div className="Home">
      <div className="Home-wrapper">
        <CarouselHome loading={loading} data={data}/>
        <FilterHome />
        <About loading={loading} data={data}/>
        <Contact loading={loading} data={data}/>
        <Country loading={loading} data={data} />
        <Review loading={loading} data={data}/>
        <Event loading={loading} data={data} />
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const response = await ApiService.get('/common',{});
  const initialData = response.data.data;

  return {
    props: {
      initialData,
    },
  };
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
