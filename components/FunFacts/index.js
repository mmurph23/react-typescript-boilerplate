import * as React from 'react';
import {Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';

const FunFacts = ({ name, hometown, age, favorite } = props) => (
  <React.Fragment>
      <Jumbotron>
          <h2>Fun facts about {name}!</h2>
          <p>{name} is {age} years old and hails from {hometown}.</p>
          <p>{name}'s all time favorite thing is {favorite}</p>
      </Jumbotron>
  </React.Fragment>
)

const mapStateToProps = (state) => ({
    name: state.user.name,
    hometown: state.user.hometown,
    age: state.user.age,
    favorite: state.user.favorite
})

export default connect(mapStateToProps)(FunFacts)