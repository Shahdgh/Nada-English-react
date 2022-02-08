import { useContext } from "react";
import EnglishContext from "../utils/EnglishContext";
import "./LoginUser.css"
function Login() {
    const {loginUser} = useContext(EnglishContext)
    return ( <>
    {/* <div class="login-wrap mt-4">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form" onSubmit={loginUser}>
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Email</label>
					<input id="user" type="email" class="input" name="email" />
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
			
				<div class="group">
					<input type="submit" class="button" />
				</div>
			
			</div>
			<div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">First Name</label>
					<input id="user" type="firstName" name="firstName" class="input"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Last Name</label>
					<input id="pass" type="lastName" name="lastName" class="input" value="text"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Class</label>
					<input id="pass" type="claass" name="claass" class="input" />
				</div>
				<div class="group">
					<label for="pass" class="label">Email </label>
					<input id="pass"  class="input" type="email" name="email"/>
				</div>
                <div class="group">
					<label for="pass" class="label">Avatar </label>
					<input id="pass"  class="input" type="avatar" name="avatar"/>
				</div>
                <div class="group">
					<label for="pass" class="label">Password </label>
					<input id="pass"  class="input" type="password" name="password"/>
				</div>
               
				<div class="group">
					<input type="submit" class="button" />
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					
				</div>
			</div>
		</div>
	</div>
</div> */}
     <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login" onSubmit={loginUser}>
            <div class="login__field">
              <i class="login__icon fas fa-envelope"></i>
              <input type="email" class="login__input" name="email" placeholder="Email" />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input type="password" class="login__input" name="password" placeholder="Password" />
            </div>
            <button type="submit" value="login" class="button login__submit">
              <span class="button__text">Log In Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
    </> );
}

export default Login;