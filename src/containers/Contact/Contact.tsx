import React from "react";
import {TContactHomeProps} from "@/containers/Contact/Contact.types";
import {Col, Row} from "antd";
import Image from "next/image";
import ImageContact from '@/assets/images/image-about.jpg'
import Button from "@/components/Button";

const Contact: React.FC<TContactHomeProps> = () => {
    return (
      <section className={"Contact"}>
        <div className={"container"}>
          <Row gutter={[16,16]}>
            <Col span={12}>
              <div className="Contact-content">
                <Image src={ImageContact} alt={''} />
                <div className="Contact-btn">
                  <Button className={"GRADIENT_BLUE"} title={"Tự nộp hồ sơ"} />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="Contact-content">
                <Image src={ImageContact} alt={''} />
                <div className="Contact-btn">
                  <Button className={"GRADIENT_BLUE"} title={"Liên Hệ Tư Vấn"} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    )
}
export default Contact;
