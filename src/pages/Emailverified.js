import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

function Emailverified() {
  const { token } = useParams()
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const verifyEmailToken = async () => {
    try {
      //   const  response=
      await axios.get(`https://nada-english-api.herokuapp.com/api/users/verify_email/${token}`)
      toast.success("تم التحقق من الأيميل")

      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
      setError(true)
    }
  }
  ///////////////
  useEffect(() => {
    verifyEmailToken()
  }, [])
  return error ? (
    <h1 style={{ textAlign: "center" }}>فشل التحقق</h1>
  ) : (
    <h1 style={{ textAlign: "center" }}>تم التحقق</h1>
  )
}

export default Emailverified
