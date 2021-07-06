import React from 'react';

const Login = () => {
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
                    <form action="" method="post" name="login" class="login-form">
                        <div class="form-group">
                            <label for="email-login">Email address</label>
                            <input type="email" name="email" className="form-control" id="email-login" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="password-login">Password</label>
                            <input type="password" name="password" id="password-login" class="form-control" placeholder="Enter Password" />
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
                    <form action="#" name="registration">
                        <div class="form-group">
                            <label for="email-signup">Email</label>
                            <input type="" name="email-signup" class="form-control" id="email-signup" placeholder="Enter Email" />
                        </div>
                        <div class="form-group">
                            <label for="username-signup">Username</label>
                            <input type="text" name="username-signup" class="form-control" id="username-signup" placeholder="Enter Username" />
                        </div>
                        <div class="form-group">
                            <label for="password-signup">Password</label>
                            <input type="password" name="password-signup" id="password-signup" class="form-control" placeholder="Enter Password" />
                        </div>
                        <div class="col-md-12 text-center mb-3 social-btn">
                            <button type="submit" class="">Get Started For
                                Free</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login;
