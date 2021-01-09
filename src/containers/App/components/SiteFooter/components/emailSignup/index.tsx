import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Message,
    Radio,
} from 'semantic-ui-react'

require('./index.css');

interface OwnProps {}

type Props = OwnProps;

const FooterEmailSignupFunc: React.FunctionComponent<Props> = (props) => {
    const [gender, setGender] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [email, updateEmail] = useState("");
    const [isChecked, updateCheckBox] = useState(false);
    const [hasError, updateHasError] = useState(true);

    useEffect(() => {
        const hasError = isChecked === false || _.isNil(gender) || email === "";
        updateHasError(hasError);
    }, [submitted, setSubmitted, email, gender, isChecked]);

    return (
        <Form id="email_signup__form" success>
            <Form.Field>
                <label>JOIN OUR LIST</label>
            </Form.Field>
            <Form.Group inline>
                <label>Gender</label>
                <Form.Field
                    control={Radio}
                    label='Male'
                    value='male'
                    checked={gender === 'male'}
                    onChange={() => {
                        setGender('male');
                        setSubmitted(false);
                    }}
                />
                <Form.Field
                    control={Radio}
                    label='Female'
                    value='female'
                    checked={gender === 'female'}
                    onChange={() => {
                        setGender('female');
                        setSubmitted(false);
                    }}
                />
                <Form.Field
                    control={Radio}
                    label='Kid'
                    value='kid'
                    checked={gender === 'kid'}
                    onChange={() => {
                        setGender('kid');
                        setSubmitted(false);
                    }}
                />
            </Form.Group>
            <Form.Field
                control={Checkbox}
                required={true}
                onChange={() => {
                    updateCheckBox(!isChecked);
                    setSubmitted(false);
                }}
                label={<label>I agree to the Terms and Conditions</label>}
            />
            <Form.Field
                id='form-input-control-error-email'
                control={Input}
                required={true}
                label='Email'
                onChange={(event, data) => {
                    updateEmail(data.value);
                    setSubmitted(false);
                }}
                placeholder='joe@hotmail.com'
            />
            {submitted && !hasError && <Message
                success
                header='Form Completed'
                content="You're all signed up for the newsletter"
            />}
            <Form.Field
                id='form-button-control-public'
                control={Button}
                onClick={() => {
                    setSubmitted(true);
                    console.log('click submit')
                }}
                content='Submit'
            />
        </Form>
    )
}

//export const EmailSignUp = FooterEmailSignupFunc;
export default FooterEmailSignupFunc;