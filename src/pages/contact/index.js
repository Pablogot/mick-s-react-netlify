import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import { Box, TextInput, TextArea, Button } from 'grommet';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  }

  render() {

    return (
      <Layout>
        <Box direction="column" justify="center" style={{ alignItems: 'center' }}>
          <Box style={{ width: 'calc( 100% - 20%)', maxWidth: '1100px' }}>
            <h1>Contact</h1>
            <form
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <TextInput type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
          Don’t fill this out:{' '}
                  <TextInput name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <label  htmlFor={'name'}>
          Your name
              </label>
              <TextInput
                type={'text'}
                name={'name'}
                onChange={this.handleChange}
                id={'name'}
                required={true}
              />
              <label  htmlFor={'email'}>
          Email
              </label>
              <TextInput
                type={'email'}
                name={'email'}
                onChange={this.handleChange}
                id={'email'}
                required={true}
              />
              <label  htmlFor={'message'}>
          Message
              </label>
              <TextArea
                name={'message'}
                onChange={this.handleChange}
                id={'message'}
                required={true}
              />
              <Button type="submit" primary label="Submit" />
            </form>
          </Box>
        </Box>
      </Layout>
    );
  }
}
