"use client"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { PasswordInput } from "@/components/ui/password-input"
import { useRouter } from "next/navigation"

export default function InputForm() {
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const router = useRouter()

  const validateFields = () => {
    let valid = true

    if (username.length < 2) {
      setUsernameError(true)
      valid = false
    } else {
      setUsernameError(false)
    }
    if (password.length < 6) {
      setPasswordError(true)
      valid = false
    } else {
      setPasswordError(false)
    }
    return valid
  }

  const submitToSignin = () => {
    if (validateFields()) {
      toast({
        title: "You are logged in",
        description: `Welcome back ${username}`
      })
      setTimeout(()=>{
        router.push('/dashoard')
      },5000)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
      <div className="w-full max-w-lg p-10 space-y-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 mb-6">Welcome Back</h1>
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="mb-1">UserName</div>
              <Input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  if (e.target.value.length >= 2) {
                    setUsernameError(false)
                  }
                }}
                placeholder="Enter your UserName"
                type="text"
              />
              <div className="font-medium text-sm text-red-500">
                {usernameError && "Username must be at least 2 characters."}
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-1">Password</div>
              <PasswordInput
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (e.target.value.length >= 6) {
                    setPasswordError(false)
                  }
                }}
                autoComplete="new-password"
              />
              <div className="font-medium text-sm text-red-500">
                {passwordError && "Password must be at least 6 characters."}
              </div>
            </div>
            </div>
            <div>
              <Button
                onClick={submitToSignin}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                Login
              </Button>
            </div>
          <div className="text-center mt-4">
            Create new Account{" "}
            <Link className="text-blue-500" href={"/sign-up"}>
              signup
            </Link>
          </div>
          </div>
        </div>
      </div>
  )
}
