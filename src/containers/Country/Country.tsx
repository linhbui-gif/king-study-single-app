import React from "react";
import {TCountryHomeProps} from "@/containers/Country/Country.types";
import {Col, Row, Skeleton, Typography} from "antd";
import Image from "next/image";
import {dataCountry} from "@/containers/Country/Country.data";
import env from "@/env";

const Country: React.FC<TCountryHomeProps> = ({ loading, data }) => {
  const dataContent = data?.items
  const Loading = () => {
    return (
      <Row gutter={[16,16]}>
        <Col span={24}>
          <Typography.Title className={"Title"} level={2}><Skeleton.Input active size={"small"} /></Typography.Title>
        </Col>
        {
          [1,2,3,4,5,6].map((element:any) => {
            return (
              <Col span={12} md={{ span: 12 }} lg={{ span: 8 }} key={element?.id}>
                <div className="Country-item">
                  <div className={"Country-item-image"}>
                    <Skeleton.Image  />
                  </div>
                  <Typography.Paragraph><Skeleton.Input active size={"small"} /></Typography.Paragraph>
                </div>
              </Col>
            )
          })
        }
      </Row>
    )
  }
  return (
    <section className={"Country"}>
      <div className={"container"}>
        {loading && Loading()}
        {!loading && <Row gutter={[16, 16]}>
          <Col span={24}>
            <Typography.Title className={"Title"} level={2}>QUỐC GIA DU HỌC</Typography.Title>
          </Col>
          {
            dataContent && dataContent[15].map((element: any) => {
              return (
                <Col span={12} md={{ span: 12 }} lg={{ span: 8 }} key={element?.id}>
                  <div className="Country-item">
                    <div className={"Country-item-image"}>
                      <img src={env.api.baseUrl.backend + element['image_location']} alt={''}/>
                    </div>
                    <Typography.Paragraph>{element['locale_vi']['title']}</Typography.Paragraph>
                  </div>
                </Col>
              )
            })
          }
        </Row>}
      </div>
    </section>
  )
}
export default Country;
