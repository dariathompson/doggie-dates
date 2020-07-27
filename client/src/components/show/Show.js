import React, { Component } from "react";
import axios from 'axios'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { showDogs } from "../../actions/authActions";

class Show extends Component {

  constructor() {
    super();
    this.state = {
      username: "beyliss",
      dogs: [],
      errors: {}
    };
  }

  componentDidMount = () => {
    this.props.showDogs(this.state.username);
  }

  // getDogs = () => {
  //   axios.get('http://localhost:5000/api/dogs/show', this.state.username)
  //   .then((response) => {
  //     const data = response.data;
  //     this.setState({dogs: data})
  //     console.log('Received dogs')
  //   })
  //   .catch(() => {
  //     console.log('Error')
  //   })
  // }


  render() {
    console.log("Hello")
    console.log(this.state)
    return(
      <h1>Dogs</h1>
      
    )

  }
}
Show.propTypes = {
  showDogs: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { showDogs })(Show);