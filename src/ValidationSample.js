import React, { Component, createRef } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  // 아래는 createRef를 이용한 ref설정
  // refToDOMelement = createRef();
  // handleFocus = () => {
  //   this.refToDOMelement.current.focus();
  // };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "1",
    });
    this.input.focus();
    // this.handleFocus();
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleButtonClick();
    }
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          ref={(ref) => (this.input = ref)}
          // ref={this.refToDOMelement}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={this.state.clicked ? (this.state.validated ? "success" : "failure") : ""}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
