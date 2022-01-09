import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";

import Styles from "../../../../Classes/Styles/Styles";

const styles = new Styles();

const style = styles.getErrorModalStyle();

const ErrorModal = (props) => {
  return (
    <Modal
      open={props.errorModalIsOpen}
      onClose={() => props.setErrorModalIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Data fetching error!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Try Again Later!
        </Typography>
      </Box>
    </Modal>
  );
};

export default ErrorModal;
