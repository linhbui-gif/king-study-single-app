import React from "react";
import {TAboutProps} from "@/containers/About/About.types";
import {Col, Row, Skeleton, Typography} from "antd";
import env from "@/env";
import Image from "next/image";

const About: React.FC<TAboutProps> = ({ loading, data }) => {
  const dataContent = data?.data
  const Loading = () => {
    return (
      <Row gutter={[24,0]}>
        <Col span={24}>
          <Typography.Title className={"Title"} level={2}><Skeleton.Input active size={"small"} /></Typography.Title>
        </Col>
        <Col span={24} lg={{ span: 12 }}>
          <div>
            <Skeleton active paragraph={true} />
          </div>
        </Col>
        <Col span={24} lg={{ span: 12 }}>
          <Skeleton.Image />
        </Col>
      </Row>
    )
  }
  return (
    <>
      <section className={'About'}>
        <div className="container">
          {
            loading && Loading()
          }
          {
            !loading && (
              <Row gutter={[24,12]}>
                <Col span={24}>
                  <Typography.Title className={"Title"} level={2}>Chào mừng đến với KINGSTUDY</Typography.Title>
                </Col>
                {
                  dataContent && (
                    <>
                      <Col span={24} lg={{ span: 12 }}>
                        <div className={"About-content"} dangerouslySetInnerHTML={{ __html: dataContent['5']['locale_vi']['content'] }} />
                      </Col>
                      <Col span={24} lg={{ span: 12 }}>
                        <img src={env.api.baseUrl.backend + dataContent['5']['image_location'] } alt={dataContent['5']['locale_vi']['title']} />
                      </Col>
                    </>
                  )
                }
              </Row>
            )
          }
        </div>
      </section>
    </>
  )
}
export default About;
