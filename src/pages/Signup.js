import { useContext } from "react"
import EnglishContext from "../utils/EnglishContext"
// import "./SignupUser.css"

function Signup() {
  const { signUser } = useContext(EnglishContext)
  return (
    <>
      <div style={{ height: "30vh" }} class="container">
        <div class="screen">
          <div class="screen__content">
            <form class="login mt-1" onSubmit={signUser}>
              <h3 className="h3">Sign Up</h3>

              <div className="login__fielld">
                <i className="login__icon "></i>
                <input type="firstName" className="login__input" name="firstName" placeholder="First Name" />
              </div>
              <div className="login__field">
                <i className="login__icon "></i>
                <input type="lastName" className="login__input" name="lastName" placeholder="Last Name" />
              </div>

              <div className="login__fielld ">
                <i className="login__icon " ></i>
                <input type="file" className="login__input"accept="image/jpeg, image/png" name="avatar" placeholder="image" />
              </div>
              <div className="login__fielld">
                <i className="login__icon "></i>
                <input type="text" className="login__input"  name="claass" placeholder="Class" />
              </div>
              <div className="login__fielld">
                <i className="login__icon "></i>
                <input type="email" className="login__input" name="email" placeholder="Email" />
              </div>
              <div className="login__fielld">
                <i class="login__icon "></i>
                <input type="password" className="login__input" name="password" placeholder="Password" />
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
    </>
  )
}

export default Signup
