import { useState } from 'react';

import { defaultItems } from '../../data/data.js';

import ScroolList from '../List/scroolList.component'

// ant design
import { Row, Col } from 'antd';
import { AppstoreOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Card } from 'antd';


const { Meta } = Card;

const style = {
    padding: '2.5rem 0',
    margin: '0 auto'
};

const Filter = () => {
    const [categoryName, setCategoryName] = useState([]);

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

    return (
        <>
            <Row style={style}>
                <Col span={3} onClick={() => renderAllCategories()}>
                    <Card
                        hoverable
                        style={{ width: 100 }}
                        cover={<AppstoreOutlined />}
                    >
                        <Meta title="All" />
                    </Card>
                </Col>
                {
                    defaultItems.map(item => {
                        return (
                            <Col key={item.key} span={3} onClick={() => filterItems(item.name)}>
                                <Card
                                    hoverable
                                    style={{ width: 100 }}
                                    cover={<item.icon />}
                                >
                                    <Meta title={item.name} />
                                </Card>
                            </Col>
                        )
                    })
                }
                <Col span={3}>
                    <Card
                        hoverable
                        style={{ width: 100 }}
                        cover={<CreditCardOutlined />}
                    >
                        <Meta title="Voucher" />
                    </Card>
                </Col>
            </Row>
            <Row>
                <ScroolList data={categoryName} />
            </Row>
        </>
    )
}

export default Filter;