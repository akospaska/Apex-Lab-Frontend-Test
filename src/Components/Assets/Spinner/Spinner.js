import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";

import CircularProgress from "@material-ui/core/CircularProgress";

import Styles from "../../../Classes/Styles/Styles";

const style = new Styles();

const Spinner = (props) => {
  return (
    <Modal open={props.isFetching} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style.getSpinnerStyle()}>
        <CircularProgress size={100} />
      </Box>
    </Modal>
  );
};

export default Spinner;
