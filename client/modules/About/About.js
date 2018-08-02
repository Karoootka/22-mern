import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, et per choro possit denique, odio quas
        malis nec cu. Quo mediocrem repudiandae ut, ignota dissentiunt ne mea.
        Ea tale consequat vis, dolore argumentum vis ut.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
