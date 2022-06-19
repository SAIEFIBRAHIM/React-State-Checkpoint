import "./App.css";
import React from "react";
import "./ToggleSwitch.css";
import pPic from "./profilePic.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      bio: "",
      imgSrc: "",
      profession: "",
      check: false,
      counter: 0,
    };
    this.btnSwitch = this.btnSwitch.bind(this);
  }

  btnSwitch() {
    if (!this.state.check) {
      this.setState((state) => ({
        fullName: <div>Full Name: Saief Brahim</div>,
        bio: <div>Bio: Developer Full Stack Js</div>,
        imgSrc: (
          <div>
            <img className="pic" src={pPic} alt="ProfilePic" />
          </div>
        ),
        profession: <div>Profession: Technical Supervisor</div>,
        check: !state.check,
      }));
    } else
      this.setState((state) => ({
        fullName: "",
        bio: "",
        imgSrc: "",
        profession: "",
        check: !state.check,
      }));
  }

  ToggleSwitch = () => {
    return (
      <div className="container">
        Show Profile
        <div className="toggle-switch">
          <input
            type="checkbox"
            className="checkbox"
            name="swbt"
            id="swbt"
            value="check"
            onChange={this.btnSwitch}
          />
          <label className="label" htmlFor="swbt">
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>
    );
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <this.ToggleSwitch />
        <div className="profile">
          {this.state.fullName}
          {this.state.bio}
          {this.state.imgSrc}
          {this.state.profession}
          <div>Time interval since the last component was mounted in Secondes : {counter} </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
}

export default App;
