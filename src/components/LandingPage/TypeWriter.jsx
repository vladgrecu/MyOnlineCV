import React, { Component } from "react";
import "./TypeWriter.css";

export default class TypeWriter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 120
    };
  }
  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const dataText = this.props.dataText;
    const { text, isDeleting, loopNum, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 100
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });
    }
    setTimeout(this.handleType, typingSpeed);
  };
  render() {
    return (
      <h3>
        <div className="welcome-message">
          {this.state.text}
          <span className="cursor"></span>
        </div>
      </h3>
    );
  }
}
