import React from "react";
import {TFilterHomeProps} from "@/containers/FilterHome/FilterHome.types";
import {Col, Form, Row, Space, Typography} from "antd";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Button, {EButtonStyleType} from "@/components/Button";

const FilterHome: React.FC<TFilterHomeProps> = ({countries, ranking, level, major, onSearch, loading}) => {
  const onFinish = (values:any) => {
    let obj:any = {}
    for (const item in values){
      if(values[item] != undefined){
        obj[item] = values[item];
      }
      if(values[item] === '' || typeof values[item] == 'undefined'){
        delete values[item]
        obj[item] = values[item]
      }
    }
    onSearch?.(values)
  }
  return (
    <div className={'FilterHome'}>
      <div className="container">
        <div className="FilterHome-wrapper">
          <Typography.Title level={3} className="FilterHome-title">TÌM KIẾM KHÓA HỌC</Typography.Title>
          <Form onFinish={onFinish}>
            <Row gutter={[16,16]}>
              <Col span={12} md={{ span: 8 }} lg={{ span: 4 }}>
                <Form.Item name="country">
                  <Select
                    placeholder="Chọn quốc gia"
                    options={countries}
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Col span={12} md={{ span: 8 }} lg={{ span: 4 }}>
                <Form.Item name="city">
                  <Select
                    placeholder="Chọn thành phố"
                    options={[]}
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Col span={12} md={{ span: 8 }} lg={{ span: 4 }}>
                <Form.Item name="levelcourse">
                  <Select
                    placeholder="Bậc học"
                    options={level}
                    allowClear
                    showSearch
                  />
                </Form.Item>
              </Col>
              <Col span={12} md={{ span: 8 }} lg={{ span: 4 }}>
                <Form.Item name="ranking">
                  <Select
                    placeholder="Ranking"
                    options={ranking}
                    allowClear
                    showSearch
                  />
                </Form.Item>
              </Col>
              <Col span={12} md={{ span: 8 }} lg={{ span: 4 }}>
                <Form.Item name="survey_tuition">
                  <Select
                    placeholder="Học phí"
                    options={[
                      {
                        label:'Dưới 500 triệu đồng',
                        value:'499000000'
                      },
                      {
                        label:'Từ 500 triệu đồng đến 1 tỉ đồng',
                        value:'600000000'
                      },
                      {
                        label:'Trên 1 tỉ đồng',
                        value:'1000000000'
                      }
                    ]}
                    allowClear
                  />
                </Form.Item>
              </Col>
              <Col span={12} md={{ span: 8 }} lg={{ span: 4 }}>
                <Form.Item name="majors">
                  <Select
                    placeholder="Ngành học"
                    options={major}
                    allowClear
                    showSearch
                  />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 24 }} lg={{ span: 24 }} style={{ display:'flex',alignItems:'center' }}>
                <Form.Item name="keywords" style={{ marginBottom:0,flex:1, marginRight:10 }}>
                  <Input placeholder={"Nội dung tìm kiếm.."} />
                </Form.Item>
                <Button title={"Tìm kiếm"} loading={loading} htmlType={"submit"} styleType={EButtonStyleType.GRADIENT_ORANGE} />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default FilterHome
