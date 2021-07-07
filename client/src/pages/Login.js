import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER, LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
	const [formState, setFormState] = useState({ "email": '', "password": '' });
  const [login, { error }] = useMutation(LOGIN_USER);
	const [createUser] = useMutation(CREATE_USER);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      emailLogin: '',
      passwordLogin: '',
			emailSignup: '',
			passwordSignup: ''
    });
  };

	const handleSignupSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createUser({
        variables: { ...formState },
      });

      Auth.login(data.createUser.token);
    } catch (e) {
      console.error(e);
    }
  };

	return (
		<div class="container">
			<div class="row">
				<div class="col-md-5 mx-auto">
					<div id="first">
						<div class="myform form login-form">
							<div class="logo mb-3">
								<div class="col-md-12 text-center">
									<h1>Login</h1>
								</div>
							</div>
							<form onSubmit={handleFormSubmit} method="post" name="login" class="login-form">
								<div class="form-group">
									<label for="email-login">Email address</label>
									<input
										type="email"
										name="email"
										className="form-control"
										id="email-login"
										value={formState.emailLogin}
										onChange={handleChange}
										placeholder="Enter email"
									/>
								</div>
								<div class="form-group">
									<label for="password-login">Password</label>
									<input
										type="password"
										name="password"
										id="password-login"
										className="form-control"
										placeholder="Enter Password"
										value={formState.passwordLogin
									}
										onChange={handleChange}
									/>
								</div>
								<div class="col-md-12 text-center mb-3 social-btn">
									<button type="submit" class="" id="btn-login">Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
	

				<div class="col-md-5 mx-auto">
					<div id="second">
						<div class="myform form signup-form">
							<div class="logo mb-3">
								<div class="col-md-12 text-center">
									<h1>Signup</h1>
								</div>
							</div>
							<form onSubmit={handleSignupSubmit} action="#" name="registration">
								<div class="form-group">
									<label for="email-signup">Email</label>
									<input
										type="email"
										name="email"
										className="form-control"
										id="email-signup"
										placeholder="Enter Email"
										value={formState.emailSignup}
										onChange={handleChange}
									/>
								</div>
								<div class="form-group">
									<label for="username-signup">Username</label>
									<input
										type="username"
										name="username"
										class="form-control"
										id="username-signup"
										placeholder="Enter Username"
										value={formState.username}
										onChange={handleChange}
									/>
								</div>
								<div class="form-group">
									<label for="password-signup">Password</label>
									<input
										type="password"
										name="password"
										id="password-signup"
										class="form-control"
										placeholder="Enter Password"
										value={formState.passwordSignup}
										onChange={handleChange}
									/>
								</div>
								<div class="col-md-12 text-center mb-3 social-btn">
									<button type="submit" class="">Get Started For
										Free</button>
								</div>
							</form>
							{error && <div>Login failed</div>}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login;
