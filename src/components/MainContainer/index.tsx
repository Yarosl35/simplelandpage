import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import classes from "./MainContainer.module.scss";
import { dummyCards } from "../../dummy-data";

import TheCard from "../TheCard";
import MainModal from "../MainModal";

const MainContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container fluid className={classes.MainContainer}>
      <Row className="mb-5">
        <Col>
          <MainModal show={showModal} handleClose={() => setShowModal(false)}>
            <TheCard
              cardText="This is the popup card view"
              cardHeader="Hello! It's nice to see you in our channel"
              btnText="Close Popup"
              imageSrs="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              btnHandler={() => setShowModal(false)}
            />
          </MainModal>
          <TheCard
            cardText="This is the main card"
            cardHeader="Hello world"
            btnText="Show Popup"
            imageSrs="https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"
            btnHandler={() => setShowModal(true)}
          />
        </Col>
      </Row>
      <Row xs={2} md={3} className="justify-content-center">
        {dummyCards.map((card) => (
          <Col className="mb-3 d-flex" key={card.id}>
            <TheCard
              cardText={card.cardText}
              btnText={card.btnText}
              imageSrs={card.imgSrc}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MainContainer;
