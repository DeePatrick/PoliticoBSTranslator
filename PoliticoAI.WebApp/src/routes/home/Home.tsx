import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainPageImg from "./img/APVMainPage.jpg";
import { useNavigate } from "react-router";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="table-container-home">
      <Container fluid>
        <Row>
          <Col className="text-center" style={{ margin: "5em auto" }}>
            <img src={MainPageImg} alt="Main Page" />
          </Col>
        </Row>
        <Row>
          <Col xs={3}></Col>
          <Col xs={6}>
            <div
              className="btn btn-secondary d-flex justify-content-center align-items-center"
              style={{ cursor: "pointer" }}
              onClick={goToDashboard}
            >
              <div className="text-center">Go to Dashboard</div>
            </div>
          </Col>
          <Col xs={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
