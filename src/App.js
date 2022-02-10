import { Route, Routes, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import Navbar from "./commpoents/Navbar"
import "./App.css"
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
import firebase from "./utils/firebase"
import MyFiavorat from "./pages/MyFiavorat"
// import firebase from "./utils/firebase"

function App() {
  const [listenings, setListenings] = useState([])
  const [readings, setReadings] = useState([])
  const [speakings, setSpeakings] = useState([])
  const [genres, setGenres] = useState([])
  const [words, setWords] = useState([])
  const [profiles, setProfiles] = useState({})

  const navigate = useNavigate()

  const getReading = async () => {
    const response = await axios.get("https://nada-english-api.herokuapp.com/api/admins/reading")

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
  const getGenres = async () => {
    const response = await axios.get("https://nada-english-api.herokuapp.com/api/geners")

    setGenres(response.data)
  }
  useEffect(() => {
    getListening()
    getSpeaking()
    getGenres()
    getReading()
    getWords()
    getProfiles()
  }, [])

  ///Sign Up user
  const signUser = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const avatar = form.elements.avatar.files[0]
      let imageUrl
      if (avatar) {
        const imageRef = firebase.storage().ref("images").child(`${avatar.lastModified}-${avatar.name}-${avatar.size}`)
        imageRef.put(avatar)
        imageUrl = await imageRef.getDownloadURL()
      }

      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        avatar: imageUrl || undefined,
        claass: form.elements.claass.value,
      }
      const response = await axios.post("https://nada-english-api.herokuapp.com/api/users/signup", userBody, {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      localStorage.tokenUser = response.data
      toast.success("sign up success")
      navigate("/login")

      // getProfiles()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
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
      //   const avatar = form.elements.avatar.files[0];
      //   let imageUrl
      //   if (avatar) {
      //     const imageRef =  firebase.storage().ref("images").child(`${avatar.lastModified}-${avatar.name}-${avatar.size}`);
      //      imageRef.put(avatar);
      //     imageUrl = await imageRef.getDownloadURL();
      // }
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        claass: form.elements.claass.value,
        // password: form.elements.password.value,
        // avatar: form.elements.avatar.value,
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

  const likeSpeaking = async speakingId => {
    try {
      const response = await axios.get(`https://nada-english-api.herokuapp.com/api/users/${speakingId}/likes`, {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      getProfiles()
      getSpeaking()

      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const likeListening = async listeningId => {
    try {
      const response = await axios.get(`https://nada-english-api.herokuapp.com/api/users/${listeningId}/listening/likes`, {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      getProfiles()
      getListening()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const likeReading = async readingId => {
    try {
      const response = await axios.get(`https://nada-english-api.herokuapp.com/api/users/${readingId}/reading/likes`, {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      getReading()
      getProfiles()
      toast.success(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const likeWord = async wordId => {
    try {
      const response = await axios.get(`https://nada-english-api.herokuapp.com/api/users/${wordId}/word/likes`, {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      getWords()
      getProfiles()
      toast.success(response.data)
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
    likeListening,

    readings,
    likeReading,
    words,
    likeWord,
    loginUser,
    signUser,
    logout,
    profiles,
    editProfile,
    speakings,
    likeSpeaking,
    genres,
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
          <Route path="/myfav" element={<MyFiavorat />} />

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
