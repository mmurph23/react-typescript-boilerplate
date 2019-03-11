import * as React from 'react';
import {Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';

interface Props {
    name: string,
    hometown: string,
    age?: number | null,
    favorite: string
}

const FunFacts = ({ name, hometown, age, favorite }: Props) => (
  <React.Fragment>
      <Jumbotron>
          <h2>Fun facts about {name}!</h2>
          <p>{name} is {age} years old and hails from {hometown}.</p>
          <p>{name}'s all time favorite thing is {favorite}</p>
      </Jumbotron>
  </React.Fragment>
)

const mapStateToProps = (state: ApplicationState) => ({
    name: state.user.name,
    hometown: state.user.hometown,
    age: state.user.age,
    favorite: state.user.favorite
})

export default connect(mapStateToProps)(FunFacts)