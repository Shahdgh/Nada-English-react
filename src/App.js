import { Route, Routes, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import Navbar from "./commpoents/Navbar"
import "./App.css"
import SectionOne from "./commpoents/SectionOne"
import EnglishContext from "./utils/EnglishContext"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Listening from "./pages/Listening"
import Words from "./pages/Words"
import About from "./pages/About"
import Reading from "./pages/Reading"
import Profile from "./pages/Profile"
import Speaking from "./pages/Speaking"

function App() {
  const [listenings, setListenings] = useState([])
  const [readings, setReadings] = useState([])
  const [speakings, setSpeakings] = useState([])

  const [words, setWords] = useState([])
  const [profiles, setProfiles] = useState({})

  const navigate = useNavigate()

  const getReading = async () => {
    const response = await axios.get("https://nada-english-api.herokuapp.com/api/admins/reading")
////////////////////////
    setReadings(response.data)
  }
  const getListening = async () => {
    const response = await axios.get("https://nada-english-api.herokuapp.com/api/admins/listening")

    setListenings(response.data)
  }
  const getSpeaking = async () => {
    const response = await axios.get("https://nada-english-api.herokuapp.com/api/admins/speaking")

    setSpeakings(response.data)
  }
  const getWords = async () => {
    const response = await axios.get("https://nada-english-api.herokuapp.com/api/admins/words")

    setWords(response.data)
  }
  useEffect(() => {
    getListening()
    getSpeaking()
    getReading()
    getWords()
    getProfiles()
  }, [])

  ///Sign Up user
  const signUser = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        avatar: form.elements.avatar.value,
        claass: form.elements.claass.value,
      }
      await axios.post("https://nada-english-api.herokuapp.com/api/users/signup", userBody)
      toast.success("sign up success")
      navigate("/login")
      // getProfile()
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const loginUser = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`https://nada-english-api.herokuapp.com/api/users/login`, userBody, {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      localStorage.tokenUser = response.data
      toast.success("login success")
      getProfiles()
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getProfiles = async () => {
    try {
      const response = await axios.get(`https://nada-english-api.herokuapp.com/api/users/profile`, {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      setProfiles(response.data)
      // console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const editProfile = async (e, userId) => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        claass: form.elements.claass.value,
        // password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.put(`https://nada-english-api.herokuapp.com/api/users/profile/${userId}`, userBody, {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      getProfiles()
      toast.success("Edit profile success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /////////logout///////////
  const logout = () => {
    localStorage.removeItem("tokenUser")

    navigate("/")
  }
  const store = {
    listenings,
    readings,
    words,
    loginUser,
    signUser,
    logout,
    profiles,
    editProfile,
    speakings,
  }
  return (
    <>
      <EnglishContext.Provider value={store}>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/words" element={<Words />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/profile" element={<Profile />} />

          {/* <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/companion-login" element={<SignLogin />} />
          <Route path="/dietitian-login" element={<DietitianLogin />} />
          <Route path="/patient-login" element={<PatientLogin />} /> */}
        </Routes>
      </EnglishContext.Provider>
    </>
  )
}

export default App
