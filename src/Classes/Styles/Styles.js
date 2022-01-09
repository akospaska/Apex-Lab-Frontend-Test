class Styles {
  getErrorModalStyle() {
    return {
      position: "absolute",
      color: "Black",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };
  }
  getDetailedMovieModalStyle() {
    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "70%",
      bgcolor: "#131312",
      boxShadow: 24,
      overflow: "auto",
      p: 4,
    };
  }
  getSpinnerStyle() {
    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 150,
      outline: "none",
      p: 4,
    };
  }
}

export default Styles;
