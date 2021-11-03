import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import './App.css';
import HeaderComponent from './components/Header/header.component';

//Ant design
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import FooterComponent from './components/Footer/footer.component';
import Filter from './components/FIlter/filter.component';

const { Header, Footer, Content } = Layout;


function App() {
  return (

    <Layout style={{padding:"0 25rem"}}>
      <Row>
        <Col span={24}>
          <Content>
            <Filter />
          </Content>
          <Footer><FooterComponent /></Footer>
        </Col>
      </Row>
    </Layout>


  );
}

export default App;
