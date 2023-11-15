import React, {useEffect, useState} from 'react';

import SEO from '@/components/SEO';
import GuestLayout from '@/layouts/GuestLayout';
import CarouselHome from "@/containers/CarouselHome";
import FilterHome from "@/containers/FilterHome/FilterHome";
import About from "@/containers/About";
import Contact from "@/containers/Contact";
import Country from "@/containers/Country";
import Review from "@/containers/Review";
import Event from "@/containers/Event";
import {
  getListCommonApi,
  getListCountryApi,
  getListLevelApi,
  getListMajorApi,
  getListRankingApi,
  getListSearchSchoolApi
} from "@/services/api";
import Partner from "@/containers/Partner";
import SchoolList from "@/containers/SchoolList";
import {EResponseCode, ETypeNotification} from "@/common/enums";
import {convertDataToSelectOptions, showNotification} from "@/utils/functions";

const Home = ({  }:any) => {
  const [loading, setLoading] = useState(false)
  const [loadingSchool, setLoadingSchool] = useState(false)
  const [data, setData] = useState([])
  const [countries, setCountry] = useState([])
  const [level, setLevel] = useState([])
  const [ranking, setRanking] = useState([])
  const [major, setMajor] = useState([])
  const [schools, setSchool] = useState([])
  const getListCommon = async () => {
    try {
      setLoading(true)
      const response = await getListCommonApi({});
      if(response?.code === EResponseCode.OK){
        setLoading(false)
        setData(response?.data)
      }
    } catch (error:any) {
      showNotification(ETypeNotification.ERROR, error?.message,'Có lỗi xảy ra!')
       setLoading(true)
    }
  }
  const getListCountries = async () => {
    try {
      setLoading(true)
      const response = await getListCountryApi({});
      if(response?.code === EResponseCode.OK){
        setLoading(false)
        setCountry(convertDataToSelectOptions(response?.data?.countries))
      }
    } catch (error:any) {
      showNotification(ETypeNotification.ERROR, error?.message,'Có lỗi xảy ra!')
      setLoading(true)
    }
  }
  const getListRanking = async () => {
    try {
      setLoading(true)
      const response = await getListRankingApi({});
      if(response?.code === EResponseCode.OK){
        setLoading(false)
        setRanking(convertDataToSelectOptions(response?.data?.ranking))
      }
    } catch (error:any) {
      showNotification(ETypeNotification.ERROR, error?.message,'Có lỗi xảy ra!')
      setLoading(true)
    }
  }
  const getListLevel= async () => {
    try {
      setLoading(true)
      const response = await getListLevelApi({});
      if(response?.code === EResponseCode.OK){
        setLoading(false)
        setLevel(convertDataToSelectOptions(response?.data?.level))
      }
    } catch (error:any) {
      showNotification(ETypeNotification.ERROR, error?.message,'Có lỗi xảy ra!')
      setLoading(true)
    }
  }
  const getListMajor = async () => {
    try {
      setLoading(true)
      const response = await getListMajorApi({});
      if(response?.code === EResponseCode.OK){
        setLoading(false)
        setMajor(convertDataToSelectOptions(response?.data?.majors))
      }
    } catch (error:any) {
      showNotification(ETypeNotification.ERROR, error?.message,'Có lỗi xảy ra!')
      setLoading(true)
    }
  }
  const onSearch = async (values:any) => {
    try {
      const body = {...values}
      setLoadingSchool(true)
      const response = await getListSearchSchoolApi(body);
      if(response?.code === EResponseCode.OK){
        setLoadingSchool(false)
        setSchool(response?.data?.data)
        showNotification(ETypeNotification.SUCCESS, 'Có' + ' ' + response?.count + ' truờng được tìm thấy','Kết quả tìm kiếm')
        if(response?.data?.data.length === 0){
          showNotification(ETypeNotification.INFO, 'Không tìm thấy trường phù hợp','Kết quả tìm kiếm')
        }
      }
    } catch (error:any) {
      showNotification(ETypeNotification.ERROR, error?.message,'Có lỗi xảy ra!')
      setLoadingSchool(true)
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      await getListCountries();
      await getListRanking();
      await getListLevel();
      await getListMajor();
      await getListCommon();
    }
    fetchData().then()
  },[])
  return (
    <div className="Home">
      <div className="Home-wrapper">
        <CarouselHome loading={loading} data={data}/>
        <FilterHome
          countries={countries}
          ranking={ranking}
          level={level}
          major={major}
          onSearch={onSearch}
          loading={loadingSchool}
        />
        <SchoolList data={schools} loading={loadingSchool} />
        {schools.length === 0 && (
          <>
            <About loading={loading} data={data}/>
            <Contact loading={loading} data={data}/>
            <Country loading={loading} data={data} />
            <Review loading={loading} data={data}/>
            <Event loading={loading} data={data} />
            <Partner loading={loading} data={data} />
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
