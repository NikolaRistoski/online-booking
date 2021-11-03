import { Row, Col } from 'antd';

const style = {
    textAlign: 'center'
};

const CategoryInformations = () => {
    return(
        <Row style={style}>
            <Col span={12}>
                <div>In clinic</div>
            </Col>
            <Col span={12}>
            <div>Virtual Consultation</div>
            </Col>
        </Row>
    ) 
}

export default CategoryInformations;