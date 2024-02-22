import React from 'react'
import style from './button.module.css'

interface Props {
    
}

const Button = (props: Props) => {
    return (
        <>
            <button className={style.button} onClick='save()'> Save</button>
        </>
    )
}

export default Button

// const firstname = document.getElementById('firstname');
// const Lastname = document.getElementById('lastname');
// const city = document.getElementById('city');
// const postal = document.getElementById('postal');
// const address = document.getElementById('address');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// const password = document.getElementById('password');

// const save = () => {
//     if (!firstname || !Lastname || !city || !postal || !address || !email || !phone || !password) {
//         alert('Please fill in all fields');
//       }
//     save();  
// }