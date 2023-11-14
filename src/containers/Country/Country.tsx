import React from "react";
import {TCountryHomeProps} from "@/containers/Country/Country.types";
import {Col, Row, Skeleton, Typography} from "antd";
import Image from "next/image";
import {dataCountry} from "@/containers/Country/Country.data";
import env from "@/env";

const Country: React.FC<TCountryHomeProps> = ({ loading, data }) => {
  const dataContent = data?.items
  return (
    <section className={"Country"}>
      <div className={"container"}>
        <Row gutter={[16,16]} flex={"wrap"}>
          <Col span={24}>
            <Typography.Title className={"Title"} level={2}>QUỐC GIA DU HỌC</Typography.Title>
          </Col>
          {
            dataContent && dataContent[15].map((element) => {
              return (
                <Col span={8} key={element?.id}>
                  <div className="Country-item">
                    <div className={"Country-item-image"}>
                      {loading ? <Skeleton.Image active /> :  <img src={env.api.baseUrl.backend + element['image_location']} alt={''} />}
                    </div>
                    <Typography.Paragraph>{element['locale_vi']['title']}</Typography.Paragraph>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </section>
  )
}
export default Country;
