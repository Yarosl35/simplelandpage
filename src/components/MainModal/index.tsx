import classes from "./Modal.module.scss";

import { Modal } from "react-bootstrap";

type MainModalProps = {
  show: boolean;
  handleClose: () => void;
};

const MainModal: React.FC<MainModalProps> = (props) => {
  const { show, handleClose } = props;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className={classes.MainModal}
      dialogClassName={classes.MainModal__dialog}
      contentClassName={classes.MainModal__mycontent}
    >
      {props.children}
    </Modal>
  );
};

export default MainModal;
