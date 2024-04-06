import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../styles/webappheader.css';
import Button from "react-bootstrap/Button";
function WebAppHeader() {
  return (
    <>
   <div className="webapp-tabs">
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="web-app-tab mb-3"
    >
      
      <Tab eventKey="visualize" title={<span className="tab-title">Visualize</span>}>
        Tab content for Home
      </Tab>
      <Tab  eventKey="forecast" title={<span className="tab-title">Forecast</span>}>
        Tab content for Profile
      </Tab>
      <Tab eventKey="data" title={<span className="tab-title">Data</span>} >
        Tab content for Contact
      </Tab>
    </Tabs>
    <Button className='webapp-logout' variant="primary">Logout</Button>
    </div>
     
    
     </>
  );
}

export default WebAppHeader;