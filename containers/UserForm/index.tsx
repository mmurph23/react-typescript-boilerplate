import * as React from 'react';
import {Jumbotron, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { updateUser } from 'src/redux/reducers/user';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { History } from 'history';
import logo from '../../logo.svg';
// import { History } from 'history';

interface ReduxProps {
    updateUser?: any,
}

interface OwnProps {
    history: History
}

type Props = ReduxProps & OwnProps

interface State {
    name: string,
    hometown: string,
    age?: number | null,
    favorite: string
}

class UserForm extends React.Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            name: '',
            hometown: '',
            age: null,
            favorite: ''
        }
    }

    private onSubmit = () => {
        const payload = {...this.state};
        this.props.updateUser(payload);
        this.props.history.push('/FunFacts')
    }

    private handleChange = <T extends keyof State>(event: React.FormEvent<HTMLInputElement>): void => {
        const { id , value } = event.currentTarget;
        const newState = {[id]: value}
        this.setState(newState as { [P in T]: State[P]; })
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

const  mapDispatchToProps = (dispatch: Dispatch)  => bindActionCreators(
    {
      updateUser
    },
    dispatch
)


export default connect<State, ReduxProps>(null, mapDispatchToProps)(UserForm);