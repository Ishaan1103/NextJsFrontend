"use client"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { PasswordInput } from "@/components/ui/password-input"
import CheckingPassword from "@/components/ui/Checking-Password"
import { useRouter } from "next/navigation"
import { BACKEND_URL } from "@/services"
import axios, { AxiosError } from "axios"

export default function InputForm() {
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState(false)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const router = useRouter()
  
  const validateFields = () => {
    let valid = true
    if (username.length < 2) {
      setUsernameError(true)
      valid = false
    } else {
      setUsernameError(false)
    }

    if (email.length < 5) {
      setEmailError(true)
      valid = false
    } else {
      setEmailError(false)
    }

    if (password.length < 6) {
      setPasswordError(true)
      valid = false
    } else {
      setPasswordError(false)
    }
    if(password !== passwordConfirmation){
      valid = false
    }
    return valid
  }

  const submitToSignup = async () => {
    if (validateFields()) {
      try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/users`, {
          name: username,
          email,
          password,
        });
  
        toast({
          title: "Created an Account",
          description: `Thanks for creating an account.`,
        });
  
        setTimeout(() => {
          router.push(`/verifyEmail?email=${response.data.email}`);
        }, 5000);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            if (error.response.status === 409) {
              toast({
                variant: "destructive",
                title: "Conflict",
                description: `The username or email you entered already exists. Please try again with a different one.`,
              });
            } else if (error.response.data && error.response.data.message) {
              toast({
                variant: "destructive",
                title: "Warning",
                description: error.response.data.message,
              });
            } else {
              toast({
                variant: "destructive",
                title: "Error",
                description: "An unexpected error occurred.",
              });
            }
          } else {
            toast({
              variant: "destructive",
              title: "Network Error",
              description: "Could not reach the server. Please check your network connection.",
            });
          }
        } else {
          toast({
            variant: "destructive",
            title: "Unexpected Error",
            description: "An unexpected error occurred while processing your request.",
          });
        }
      }
    } else {
      toast({
        variant: "destructive",
        title: "Warning",
        description: `Please check the required fields.`,
      });
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
      <div className="w-full max-w-lg p-10 space-y-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 mb-4">Join Now</h1>
          <p className="text-gray-600 mb-6">Sign up to start your anonymous adventure</p>
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
              <div className="mb-1">Email</div>
              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (e.target.value.length >= 5) {
                    setEmailError(false)
                  }
                }}
                placeholder="Enter your Email"
                type="text"
              />
              <div className="font-medium text-sm text-red-500">
                {emailError && "Email must be at least 5 characters."}
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
            <div className="mb-4">
              <div className="mb-1">Confirm Password</div>
              <PasswordInput
                id="password_confirmation"
                placeholder="Confirm Password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="new-password"
              />
              <div>
                {passwordConfirmation && (
                  <CheckingPassword
                    password={password}
                    passwordConfirmation={passwordConfirmation}
                  />
                )}
              </div>
            </div>
            <div>
              <Button
                onClick={submitToSignup}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                Create
              </Button>
            </div>
          </div>
         <div className="mt-7">
                Already have an Account please <Link className="text-blue-500" href="/sign-in">signin</Link>
         </div>
        </div>
      </div>
    </div>
  )
}
