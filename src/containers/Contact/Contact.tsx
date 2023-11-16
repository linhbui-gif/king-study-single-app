import React from "react";
import {TContactHomeProps} from "@/containers/Contact/Contact.types";
import {Col, Row, Skeleton, Typography} from "antd";
import Button from "@/components/Button";
import env from "@/env";

const Contact: React.FC<TContactHomeProps> = ({ loading, data }) => {
    const dataContent = data?.items
  const Loading = () => {
    return (
      <Row gutter={[16,16]}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
          <div className="Contact-content">
            <Skeleton.Image />
            <div className="Contact-btn">
              <Skeleton.Button />
            </div>
          </div>
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
          <div className="Contact-content">
            <Skeleton.Image />
            <div className="Contact-btn">
              <Skeleton.Button />
            </div>
          </div>
        </Col>
      </Row>
    )
  }
    return (
      <section className={"Contact"}>
        <div className={"container"}>
          {loading && Loading()}
          {
            !loading && (
              <Row gutter={[16,16]}>
                {dataContent && (
                  <>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                      <div className="Contact-content">
                        <img src={env.api.baseUrl.backend + dataContent['5'][0]['image_location'] } alt={''}/>
                        <div className="Contact-btn">
                          <Button className={"GRADIENT_BLUE"} title={dataContent[5][0]['locale_vi']['title']}/>
                        </div>
                      </div>
                    </Col>
                    <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                      <div className="Contact-content">
                        <img src={env.api.baseUrl.backend + dataContent['5'][1]['image_location'] } alt={''} />
                        <div className="Contact-btn">
                          <Button className={"GRADIENT_BLUE"} title={dataContent[5][1]['locale_vi']['title']} />
                        </div>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
            )
          }
        </div>
      </section>
    )
}
export default Contact;
