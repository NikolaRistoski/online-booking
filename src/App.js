import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import './App.css';

//Ant design
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import MasterCategory from './components/MasterCategory/master.component';

const { Content } = Layout;


function App() {
  return (

    <Layout style={{ padding: "0 25rem" }}>
      <Row>
        <Col span={24}>
          <Content>
            <MasterCategory />
          </Content>
        </Col>
      </Row>
    </Layout>


  );
}

export default App;
