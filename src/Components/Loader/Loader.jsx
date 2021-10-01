import { Component } from "react";
import Loader from "react-loader-spinner";

class Spinner extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#999999"
        height={100}
        width={100}
      />
    );
  }
}

export { Spinner }