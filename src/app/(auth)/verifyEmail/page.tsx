"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BACKEND_URL } from "@/services"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { SetStateAction, useEffect, useState } from "react"

const VerifyEmail = () => {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const [otp, setOtp] = useState('')
  // useEffect(()=>{
  //   axios.post(`${BACKEND_URL}/api/v1/auth/send-otp`,{
  //     email
  //   })
  // },[])
  const handleOtp = () => {

  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
      <div className="min-w-lg bg-white border p-10 rounded-xl">
        <div className="flex flex-col ">
          <div className="text-4xl font-bold p-4">
            Please enter your OTP
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              A OTP sent to {email}
            </div>
            <Input
              value={otp}
              onChange={(e: { target: { value: SetStateAction<string> } }) => {
                setOtp(e.target.value)
              }}
              type="text"
            />
            <div className="py-3">
              <Button
                onClick={handleOtp}
                className=" inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                Submit
              </Button>
            </div>
              <div className="items-center">
                click here to resend Email<Button className="px-1 pb-4 underline text-blue-600">Resend</Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail
