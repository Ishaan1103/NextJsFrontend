const CheckingPassword = ({password,passwordConfirmation}:{password:string,passwordConfirmation:string}) => {
    return (
    <div>
        {password === passwordConfirmation ? <></>:<p className="font-medium text-sm text-red-500">Password do not match</p>}
    </div>
  )
}

export default CheckingPassword