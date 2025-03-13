
const users=[
    {
        email:"Ashrafull@gmail.com",
        password:"password"
    },
    {
        email:"Shoron@gmail.com",
        password:"password"
    },
    {
        email:"Ullas@gmail.com",
        password:"password"
    }
]
export const getUserByEmail = email => {
    const found=users.find(user=>user.email===email);
    return found;
}