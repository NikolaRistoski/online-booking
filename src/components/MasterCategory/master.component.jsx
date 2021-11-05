import { useState, useEffect } from 'react';

// Data
import { defaultItems } from '../../data/data.js';

// nmp package for scrollable and design list 
import ScroolList from '../List/scroolList.component'

// ant design
import { Row, Col } from 'antd';
import { AppstoreOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Card } from 'antd';


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



const MasterCategory = () => {
    // State for active element name
    const [activeElement, setActiveElement] = useState("")

    // Change elements className if isActive... is true
    const [isActiveAll, setIsActiveAll] = useState(false)
    const [isActiveOthers, setIsActiveOthers] = useState(false)
    const [isActiveVaucher, setIsActiveVaucher] = useState(false)

    const [categoryName, setCategoryName] = useState([]);

    // Get all categories
    const renderAllCategories = () => {
        const array = []

        defaultItems.map((item) => {
            return item.category.map(category => array.push({
                itemName: item.name,
                name: category.name,
                rdmValue: category.rdmValue,
                subCategory: category.subCategory
            }))
        })
        setCategoryName(array)
    }

    //  Get filtered categories by category name
    const filterItems = (categoryName) => {
        const array = []

        defaultItems.filter(item => {
            if (item.name === categoryName) {
                item.category.map(item => array.push({
                    allData: item,
                    name: item.name
                }))
            }
        })
        setCategoryName(array)
    }

    useEffect(() => {
        renderAllCategories()
        setActiveElement('All')
    }, [])

    return (
        <div>
            <Row style={style}>
                {/* All Categories */}
                <Col span={3} onClick={() => {

                    setActiveElement('All')

                    renderAllCategories()

                    setIsActiveAll(true)
                    setIsActiveOthers(false)
                    setIsActiveVaucher(false)
                }}
                >
                    <Card
                        hoverable
                        style={{ width: 100, fontSize: 40, padding: '15px 0' }}
                        cover={<AppstoreOutlined />}
                        className={activeElement === 'All' ? 'active-element' : ""}
                    >
                        <Meta title="All" style={{
                            padding: "10px 0"
                        }} />
                    </Card>
                </Col>

                {/* Render Injectables, Face, Spa, Dematology, Acne treatment, and Hydrafacial categories */}
                {
                    defaultItems.map((item) => {
                        return (
                            <Col key={item.key} span={3} onClick={() => {
                                setActiveElement(item.name)
                                filterItems(item.name)

                                setIsActiveAll(false)
                                setIsActiveOthers(true)
                                setIsActiveVaucher(false)
                            }}>
                                <Card
                                    hoverable
                                    style={{ width: 100, padding: '15px 0' }}
                                    cover={<item.icon />}
                                    className={activeElement === item.name && isActiveOthers ? 'active-element' : ""}
                                >
                                    <Meta title={item.name} style={{
                                        padding: "10px 0",
                                    }} />
                                </Card>
                            </Col>
                        )
                    })
                }

                {/* Voucher Category */}
                <Col span={3}>
                    <Card
                        hoverable
                        style={{ width: 100, fontSize: 40, padding: '15px 0' }}
                        cover={<CreditCardOutlined />}
                        className={isActiveVaucher ? 'active-element' : ""}
                    >
                        <Meta title="Voucher" style={{
                            padding: "10px 0"
                        }} />
                    </Card>
                </Col>
            </Row>

            {/* ScroolList component renders all categories depending of master category */}
            <Row gutter={16}>
                <Col span={24}>
                    <div style={styleTwo}>
                        <ScroolList data={categoryName} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default MasterCategory;