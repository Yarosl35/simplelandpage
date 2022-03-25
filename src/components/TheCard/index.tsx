import classes from "./TheCard.module.scss";
import { Card, Button } from "react-bootstrap";

type CardModel = {
  cardText: string;
  cardHeader?: string;
  btnText: string;
  imageSrs: string;
  btnHandler?: () => void;
};

const TheCard: React.FC<CardModel> = ({
  cardText,
  cardHeader,
  btnText,
  imageSrs,
  btnHandler,
}) => {
  return (
    <Card className={classes.TheCard}>
      <Card.Img variant="top" src={imageSrs} />
      <Card.Body className="d-flex flex-column justify-content-end">
        {cardHeader && <Card.Title>{cardHeader}</Card.Title>}
        <Card.Text className="m-0">{cardText}</Card.Text>
        <Button className={classes.popupBtn} onClick={btnHandler}>
          {btnText}
        </Button>
      </Card.Body>
    </Card>
  );
};
export default TheCard;
