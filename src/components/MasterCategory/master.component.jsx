import { useState, useEffect } from "react";
// nmp package for scrollable and design list
import ScroolList from "../List/scroolList.component";

// ant design
import { Row, Col } from "antd";
import { AppstoreOutlined, CreditCardOutlined } from "@ant-design/icons";
import { Card } from "antd";

// GraphQL Query
import { useQuery } from "@apollo/client";
import {
  GET_ALL_MASTER_CATEGORIES,
  GET_ALL_DATA,
} from "../../GraphQL/Queries.js";

const { Meta } = Card;

const style = {
  padding: "24px",
  background: "#ffffff",
  textAlign: "center",
};

const styleTwo = {
  padding: "24px 10px",
  margin: "24px auto",
  background: "#ffffff",
};

const MasterCategory = () => {
  const { loading, error, data } = useQuery(GET_ALL_MASTER_CATEGORIES);

  const {
    loading: allDataLoading,
    error: allDataError,
    data: allDataData,
  } = useQuery(GET_ALL_DATA);

  // State for active element name
  const [activeElement, setActiveElement] = useState("");

  // Change elements className if isActive... is true
  const [isActiveAll, setIsActiveAll] = useState(false);
  const [isActiveOthers, setIsActiveOthers] = useState(false);
  const [isActiveVaucher, setIsActiveVaucher] = useState(false);

  const [categoryName, setCategoryName] = useState([]);

  // Get all categories
  const renderAllCategories = () => {
    const array = [];
    allDataData.master_categories.map((master) => {
      master.categories.map((category) => {
        return array.push({
          name: category.name,
        });
      });
    });
    setCategoryName(array);
  };

  //  Get filtered categories by category name
  const filterItems = (categoryName) => {
    const array = [];

    allDataData.master_categories.filter((item) => {
      if (item.name === categoryName) {
        item.categories.map((item) =>
          array.push({
            name: item.name,
          })
        );
      }
    });
    setCategoryName(array);
  };

  useEffect(() => {
    if (!loading && !allDataLoading) {
      renderAllCategories();
      setActiveElement("All");
    }
  }, [loading, allDataLoading]);

  if (loading && allDataLoading) return "Loading";

  return (
    <div>
      <Row style={style}>
        {/* All Categories */}
        <Col
          span={3}
          onClick={() => {
            setActiveElement("All");

            renderAllCategories();

            setIsActiveAll(true);
            setIsActiveOthers(false);
            setIsActiveVaucher(false);
          }}
        >
          <Card
            hoverable
            style={{ width: 100, fontSize: 40, padding: "15px 0" }}
            cover={<AppstoreOutlined />}
            className={activeElement === "All" ? "active-element" : ""}
          >
            <Meta
              title="All"
              style={{
                padding: "10px 0",
              }}
            />
          </Card>
        </Col>

        {/* Render Injectables, Face, Spa, Dematology, Acne treatment, and Hydrafacial categories */}
        {data.master_categories.map((item) => {
          return (
            <Col
              key={item.id}
              span={3}
              onClick={() => {
                setActiveElement(item.name);
                filterItems(item.name);

                setIsActiveAll(false);
                setIsActiveOthers(true);
                setIsActiveVaucher(false);
              }}
            >
              <Card
                hoverable
                style={{ width: 100, padding: "15px 0" }}
                cover={
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "40px",
                      heigh: "40px",
                      margin: "0 auto",
                    }}
                  />
                }
                className={
                  activeElement === item.name && isActiveOthers
                    ? "active-element"
                    : ""
                }
              >
                <Meta
                  title={item.name}
                  style={{
                    padding: "10px 0",
                  }}
                />
              </Card>
            </Col>
          );
        })}

        {/* Voucher Category */}
        <Col span={3}>
          <Card
            hoverable
            style={{ width: 100, fontSize: 40, padding: "15px 0" }}
            cover={<CreditCardOutlined />}
            className={isActiveVaucher ? "active-element" : ""}
          >
            <Meta
              title="Voucher"
              style={{
                padding: "10px 0",
              }}
            />
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
  );
};

export default MasterCategory;
