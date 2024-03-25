export const validate=(email,password,name)=>{

    if(name){
    const testName=/^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(name)
    if(!testName) return "Name is not valid"
    }

    const testEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    const testPassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

    if(!testEmail)return "E-mail is not valid"
    if(!testPassword)return "Password is not valid"

    return null

}