import React from 'react';
import { reduxForm } from 'redux-form';

class Signin extends React.Component{
    constructor(props){
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit({email, password}){
        console.log(email, password);
    }

    render(){
        const { handleSubmit, fields: { email, password }} = this.props;

        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input {...email} type="text" className="form-control"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} type="password" className="form-control"/>
                </fieldset>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
};

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);