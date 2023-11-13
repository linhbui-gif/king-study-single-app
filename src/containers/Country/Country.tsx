import React from "react";
import {TCountryHomeProps} from "@/containers/Country/Country.types";
import {Col, Row, Typography} from "antd";
import Image from "next/image";
import {dataCountry} from "@/containers/Country/Country.data";

const Country: React.FC<TCountryHomeProps> = () => {
  return (
    <section className={"Country"}>
      <div className={"container"}>
        <Row gutter={[16,16]} flex={"wrap"}>
          <Col span={24}>
            <Typography.Title className={"Title"} level={2}>QUỐC GIA DU HỌC</Typography.Title>
          </Col>
          {
            dataCountry && dataCountry.map((element) => {
              return (
                <Col span={8} key={element?.id}>
                  <div className="Country-item">
                    <Image src={element?.image} alt={''} />
                    <Typography.Paragraph>{element?.name}</Typography.Paragraph>
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
