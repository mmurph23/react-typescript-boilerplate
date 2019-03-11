import * as React from 'react';
import {Jumbotron, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { updateUser } from 'src/redux/reducers/user';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from '../../logo.svg';

class UserForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            hometown: '',
            age: null,
            favorite: ''
        }
    }

    onSubmit = () => {
        const payload = {...this.state};
        this.props.updateUser(payload);
        this.props.history.push('/FunFacts')
    }

    handleChange = event => {
        const { id , value } = event.currentTarget;
        this.setState({
            [id] : value
        });
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            </header>
            <Jumbotron>
                <Form>
                    <FormGroup >
                        <Label for="name">Name</Label>
                        <Input type="text"
                            name="name"
                            id="name" 
                            placeholder="Jim Jimmerson"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup >
                        <Label for="age">Age</Label>
                        <Input type="number"
                            name="age"
                            id="age" 
                            placeholder="25"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup >
                        <Label for="hometown">Hometown</Label>
                        <Input type="text"
                            name="hometown"
                            id="hometown" 
                            placeholder="Boston, MA"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup >
                        <Label for="favorite">A favorite thing</Label>
                        <Input type="text"
                            name="favorite"
                            id="favorite" 
                            placeholder="Ben and Jerrys"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button onClick={() => this.onSubmit()}>Submit</Button>
                </Form>
            </Jumbotron>
            </div>
        )
    }
}

const  mapDispatchToProps = (dispatch)  => bindActionCreators(
    {
      updateUser
    },
    dispatch
)


export default connect(null, mapDispatchToProps)(UserForm);