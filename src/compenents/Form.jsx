import React, { useState } from "react";

const Form = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorpassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailcolor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState();

  const validate = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUsername("");
      setUserColor("green");
    } else {
      setErrorUsername("User name must be 8 letters long ");
      setUserColor("red");
    }

if(email.includes("@gmail")){
    setErrorEmail("");
    setEmailColor("green");

}else{
    setErrorEmail("Email must contain @gmail");
    setEmailColor("red");
}

if(password.length>8){
    setErrorpassword("");
    setPasswordColor("green");
}else{
    setErrorpassword("Password length is above 8");
    setPasswordColor("red");
}

if(password !='' && password === confirmPassword){
    setErrorConfirmPassword("");
    setConfirmPasswordColor("green");
}else{
    setErrorConfirmPassword("password did not matched !")
    setConfirmPasswordColor("red")
}
setUsername("");
setEmail("");
setPassword("");
setConfirmPassword("");

setUserColor("sky-400")
setPasswordColor("sky-400");
setEmailColor("sky-400");
setConfirmPasswordColor("sky-400");

  };

  return (
    <>
      <div className="flex items-center justify-evenly w-120 h-auto p-2 gap-2 bg-white">
        <div className=" w-60  h-70">
          <img className=" w-60  h-70" src="src/svg/beautiful-image.webp" alt="image" />
        </div>
        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            className='border-b-2 border-sky-400 focus:outline-none w-60 h-10 '
          />
          <p className='text-green'>{errorUserName}</p>

          <input
            type="email"
            placeholder="Email"
            style={{ borderColor: emailcolor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-b-2 border-sky-400 focus:outline-none  w-60 h-10'
          />
          <p className='text-green'>{errorEmail}</p>

          <input
            type="password"
            placeholder="password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-b-2 border-sky-400 focus:outline-none  w-60 h-10'
          />
          <p className='text-green'>{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm password"
            style={{ borderColor: confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='border-b-2 border-sky-400 focus:outline-none  w-60 h-10'
          />
          <p className='text-green'>{errorConfirmPassword}</p>

          <button type="submit" className="w-20 h-10 bg-sky-500 text-white rounded-md mt-2" onClick={validate}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
