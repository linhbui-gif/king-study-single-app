import React from "react";
import {TFilterHomeProps} from "@/containers/FilterHome/FilterHome.types";
import {Col, Form, Row, Space, Typography} from "antd";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Button, {EButtonStyleType} from "@/components/Button";

const FilterHome: React.FC<TFilterHomeProps> = () => {
  return (
    <div className={'FilterHome'}>
      <div className="container">
        <div className="FilterHome-wrapper">
          <Typography.Title level={3} className="FilterHome-title">TÌM KIẾM KHÓA HỌC</Typography.Title>
          <Row gutter={[16,0]}>
            <Col span={4}>
              <Form.Item name="username">
                <Select
                  placeholder="Chọn quốc gia"
                  options={[]}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="username">
                <Select
                  placeholder="Chọn thành phố"
                  options={[]}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="username">
                <Select
                  placeholder="Bậc học"
                  options={[]}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="username">
                <Select
                  placeholder="Ranking"
                  options={[]}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="username">
                <Select
                  placeholder="Học phí"
                  options={[]}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="username">
                <Select
                  placeholder="Ngành học"
                  options={[]}
                  allowClear
                />
              </Form.Item>
            </Col>
            <Col span={24} style={{ display:'flex',alignItems:'center' }}>
              <Form.Item name="username" style={{ marginBottom:0,flex:1, marginRight:10 }}>
                <Input placeholder={"Nội dung tìm kiếm.."} />
              </Form.Item>
              <Button title={"Tìm kiếm"} styleType={EButtonStyleType.GRADIENT_ORANGE} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
export default FilterHome
