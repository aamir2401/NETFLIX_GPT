export const formValidator = (email, password, fullName) =>
{
     const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
     const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
     // const isValidMobNumber = /^[6-9]\d{9}$/.test(mobileNumber)
     const isValidFullName = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(fullName)



     if(!isValidEmail)
     return "Invalid Email!!"
     if(!isValidPassword)
     return "Invalid Password!!"
     // if(!isValidMobNumber)
     // return "Invalid Mobile Number Format.!!"
     if(!isValidFullName)
     return "Invalid Name Format!!"
}