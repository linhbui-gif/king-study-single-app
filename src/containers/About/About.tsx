import React from "react";
import {TAboutProps} from "@/containers/About/About.types";
import {Col, Row, Skeleton, Typography} from "antd";
import env from "@/env";

const About: React.FC<TAboutProps> = ({ loading, data }) => {
  const dataContent = data?.data
  return (
    <>
      <section className={'About'}>
        <div className="container">
          <Row gutter={[24,0]}>
            <Col span={24}>
              <Typography.Title className={"Title"} level={2}>Chào mừng đến với KINGSTUDY</Typography.Title>
            </Col>
            {
              dataContent && (
                <>
                  <Col span={12}>
                    <Skeleton loading={loading}>
                      <div className={"About-content"} dangerouslySetInnerHTML={{ __html: dataContent['5']['locale_vi']['content'] }} />
                    </Skeleton>
                  </Col>
                  <Col span={12}>
                    {loading ? <Skeleton.Image active></Skeleton.Image> : <img src={env.api.baseUrl.backend + dataContent['5']['image_location'] } alt={dataContent['5']['locale_vi']['title']} />}
                  </Col>
                </>
              )
            }
          </Row>
        </div>
      </section>
    </>
  )
}
export default About;
