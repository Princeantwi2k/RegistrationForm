import React, { Component } from "react";
import pic from "../pic.png";
import "./RegistrationForm.css";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fullname: "",
      phonenumber: "",
      nextking: "",
      location: "",
      school: "",
      join: "",
      codetrain: "",
      selectedOption: "",
      Option: "",
    };
  }
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Email:",
      this.state.email + "\n" + "Fullname:",
      this.state.fullname + "\n" + "Phonenumber:",
      this.state.phonenumber + "\n" + "Nextking:",
      this.state.nextking + "\n" + "Location:",
      this.state.location + "\n" + "School:",
      this.state.school + "\n" + "Join:",
      this.state.join + "\n" + "Code:",
      this.state.codetrain + "\n" + "SelectedOption:",
      this.state.selectedOption + "\n" + "Option:",
      this.state.Option
    );
    this.setState({
      email: "",
      fullname: "",
      phonenumber: "",
      nextking: "",
      location: "",
      school: "",
      join: "",
      codetrain: "",
      selectedOption: "",
      Option: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="naa col-xm-12 col-sm-12 col-md-12">
            <h1> Codetrain Registration Form </h1>
            <p>
              {" "}
              This form is the first step to register for Codetrain's program
              starting on 25th July 2020. Our admissions team will reach out to
              you after successfully submitting your form
            </p>
            <h3 style={{ color: `red` }}>
              {" "}
              Required<span style={{ color: `red` }}>*</span>
            </h3>
          </div>
          <div className="naa col-xm-12 col-sm-12 col-md-12">
            <label>
              Email Address <span style={{ color: `red` }}>*</span>
            </label>
            <input
              type="Email"
              name="email"
              placeholder=" Your Email"
              value={this.state.email}
              onChange={this.handlechange}
            />
          </div>
          <div className="naa col-xm-12 col-sm-12 col-md-12">
            <label>
              Full Name<span style={{ color: `red` }}>*</span>
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Your answer"
              value={this.state.fullname}
              onChange={this.handlechange}
            />
          </div>
          <div className="naa col-xm-12 col-sm-12 col-md-12">
            <label>
              Phone Number<span style={{ color: `red` }}>*</span>
            </label>
            <input
              type="number"
              name="phonenumber"
              placeholder="Your answer"
              value={this.state.handlechange}
              onChange={this.handlechange}
            />
          </div>
          <div className="naa col-xm-12 col-sm-12 col-md-12">
            <h4>Phone Number of the next in kin</h4>
            <p>
              Phone number of someone we can reach out to in case your phone is
              off or not reachable. Eg, your parent, guardian or sibling, or
              spouse
            </p>
            <input
              type="number"
              name="nextking"
              placeholder="Your answer"
              value={this.state.nextking}
              onChange={this.handlechange}
            />
          </div>
          <div className="naa col-xm-12 col-sm-12 col-md-12">
            <label>
              Can you pay 60% or more of the full Codetrain fees (GHS6000 for
              Ghanaian applicants or $1,200 for international applicants) *
            </label>
            <br />{" "}
            <input
              className="radio"
              name="selectedOption"
              type="radio"
              value="Yes"
              checked={this.state.selectedOption === "Yes"}
              onChange={this.handlechange}
            />
            Yes
            <br />{" "}
            <input
              className="radio"
              name="selectedOption"
              type="radio"
              value="No"
              checked={this.state.selectedOption === "No"}
              onChange={this.handlechange}
            />{" "}
            No
          </div>
          <div className="naa col-xm-12 col-sm-12 col-md-12">
            <label>Please indicate who is going to pay your fees </label>
            <input
              className="radio"
              type="radio"
              name="Option"
              value="Yourself"
              checked={this.state.Option === "Yourself"}
              onChange={this.handlechange}
            />
            Yourself
            <br />{" "}
            <input
              className="radio"
              type="radio"
              name="Option"
              value="Parent"
              checked={this.state.Option === "Parent"}
              onChange={this.handlechange}
            />{" "}
            parent/sponsor
            <br />{" "}
            <input
              className="radio"
              type="radio"
              name="Option"
              value="Oganization"
              checked={this.state.Option === "Oganization"}
              onChange={this.handlechange}
            />
            Organization
          </div>
          <div className="naa col-xm-12 col-sm-12 col-md-12">
            <label>
              Location<span style={{ color: `red` }}>*</span>
            </label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handlechange}
              placeholder="your answer"
            />
          </div>
          <div className="naa col-xm-12 col-sm-12 col-md-12">
            <label>
              Current or previous school<span style={{ color: `red` }}>*</span>{" "}
            </label>
            <input
              type="text"
              name="school"
              value={this.state.school}
              onChange={this.handlechange}
              placeholder="Your answer"
            />
          </div>
          <div className="naa col-xm-12 col-sm-12 col-md-12">
            <label>
              Why do you want to join Codetrain{" "}
              <span style={{ color: ` red` }}>*</span>
            </label>
            <input
              type="text"
              name="join"
              value={this.state.join}
              onChange={this.handlechange}
              placeholder="Your answer"
            />
          </div>
          <div className="naa col-xm-12 col-sm-12 col-md-6">
            <label>
              How did you hear about Codetrain ?{" "}
              <span style={{ color: `red` }}>*</span>
            </label>
            <input
              type="text"
              name="codetrain"
              value={this.state.codetrain}
              onChange={this.handlechange}
              placeholder="Your answer"
            />
          </div>

          <p>
            A copy of your repones will be emailed to the adree you provided
          </p>

          <button type="button" className="btn btn-primary submit">
            summit
          </button>

          <ul>
            <li className="space"></li>
            <li>Page 1 0f 1</li>
          </ul>
          <p>Never submit passwords through Google Forms.</p>
          <ul>
            <li>
              <img src={pic} />{" "}
            </li>
            <li>reCAPTCHA Privacy Terms</li>
          </ul>
          <p style={{ textAlign: `center` }}>
            This content is neither created nor endorsed by Google. Report Abuse
            - Terms of Service - Privacy Policy
          </p>
          <h1 style={{ textAlign: `center` }}>Google Forms</h1>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
