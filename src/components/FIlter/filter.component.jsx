import { useState, useEffect } from 'react';

import { defaultItems } from '../../data/data.js';

import ScroolList from '../List/scroolList.component'

// ant design
import { Row, Col } from 'antd';
import { AppstoreOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import CategoryInformations from '../CategoryInformations/categoryInformations.component.jsx';


const { Meta } = Card;

const style = {
    padding: '24px',
    background: '#ffffff',
    textAlign: 'center'
};

const styleTwo = {
    padding: '24px 10px',
    margin: '24px auto',
    background: '#ffffff',
}


const Filter = () => {
    const [categoryName, setCategoryName] = useState([]);

    // Get all categories
    const renderAllCategories = () => {
        const array = []

        defaultItems.map(item => {
            return item.category.map(category => array.push({
                name: category.name,
                rdmValue: category.rdmValue
            }))
        })
        setCategoryName(array)
    }

    //  Get filtered categories
    const filterItems = (categoryName) => {
        const array = []

        defaultItems.filter(item => {
            if (item.name === categoryName) {
                item.category.map(item => array.push({
                    name: item.name
                }))
            }
        })
        setCategoryName(array)
    }

    useEffect(() => {
        renderAllCategories()
    }, [])

    return (
        <div>
            <Row style={style}>
                <Col span={3} onClick={() => renderAllCategories()}>
                    <Card
                        hoverable
                        style={{ width: 100, fontSize: 40, padding: '15px 0' }}
                        cover={<AppstoreOutlined />}
                    >
                        <Meta title="All" style={{
                            padding: "10px 0"
                        }} />
                    </Card>
                </Col>
                {
                    defaultItems.map(item => {
                        return (
                            <Col key={item.key} span={3} onClick={() => filterItems(item.name)}>
                                <Card
                                    hoverable
                                    style={{ width: 100, padding: '15px 0' }}
                                    cover={<item.icon />}
                                >
                                    <Meta title={item.name} style={{
                                        padding: "10px 0",
                                    }} />
                                </Card>
                            </Col>
                        )
                    })
                }
                <Col span={3}>
                    <Card
                        hoverable
                        style={{ width: 100, fontSize: 40, padding: '15px 0' }}
                        cover={<CreditCardOutlined />}
                    >
                        <Meta title="Voucher" style={{
                            padding: "10px 0"
                        }} />
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={10}>
                    <div style={styleTwo}>
                        <ScroolList data={categoryName} />
                    </div>
                </Col>
                <Col span={14}>
                    <div style={styleTwo}>
                        <CategoryInformations />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Filter;