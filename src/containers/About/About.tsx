import React from "react";
import {TAboutProps} from "@/containers/About/About.types";
import {Col, Row, Typography} from "antd";
import Image from "next/image";
import ImageModel1 from '@/assets/images/image-about.png';

const About: React.FC<TAboutProps> = () => {
  return (
    <>
      <section className={'About'}>
        <div className="container">
          <Row gutter={[24,0]}>
            <Col span={24}>
              <Typography.Title className={"Title"} level={2}>Chào mừng đến với KINGSTUDY</Typography.Title>
            </Col>
            <Col span={12}>
              <div className={"About-content"}>
                <p>Với mô hình ONE - STOP - STATION (một trạm), KingStudy cung cấp đa dạng các dịch vụ nhằm giúp các bạn học sinh rút ngắn được thời gian để chạm tới giấc mơ du học mà không phải tìm đến bất kỳ đơn vị nào khác để hỗ trợ. </p>
                <p>Với mô hình ONE - STOP - STATION (một trạm), KingStudy cung cấp đa dạng các dịch vụ nhằm giúp các bạn học sinh rút ngắn được thời gian để chạm tới giấc mơ du học mà không phải tìm đến bất kỳ đơn vị nào khác để hỗ trợ. </p>
                <p>Với mô hình ONE - STOP - STATION (một trạm), KingStudy cung cấp đa dạng các dịch vụ nhằm giúp các bạn học sinh rút ngắn được thời gian để chạm tới giấc mơ du học mà không phải tìm đến bất kỳ đơn vị nào khác để hỗ trợ. </p>
                <p>Với mô hình ONE - STOP - STATION (một trạm), KingStudy cung cấp đa dạng các dịch vụ nhằm giúp các bạn học sinh rút ngắn được thời gian để chạm tới giấc mơ du học mà không phải tìm đến bất kỳ đơn vị nào khác để hỗ trợ. </p>
                <p>Với mô hình ONE - STOP - STATION (một trạm), KingStudy cung cấp đa dạng các dịch vụ nhằm giúp các bạn học sinh rút ngắn được thời gian để chạm tới giấc mơ du học mà không phải tìm đến bất kỳ đơn vị nào khác để hỗ trợ. </p>
              </div>
            </Col>
            <Col span={12}>
              <Image src={ImageModel1} alt={''}/>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}
export default About;
