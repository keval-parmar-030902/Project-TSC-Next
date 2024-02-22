
import React from 'react'
import  Style from './form.module.css'
import Button from '../Button'

interface Props {
    
}

const Form = (props: Props) => {
    return (
        <>
        <form action="#" className={Style.form}>
            <div className={Style.inputs}>
                {/* <label htmlFor="name">Full Name:</label><br /> */}
                <input type="text" id='name'required autoComplete='off' placeholder='Full Name'/>
            </div>
            <div className={Style.inputs}>
                {/* <label htmlFor="email">Email:</label><br /> */}
                <input type="email" id='email'required autoComplete='off' placeholder='Email'/>
            </div>
            <div className={Style.inputs}>
                {/* <label htmlFor="phone">Phone.No:</label><br /> */}
                <input type="number" id='phone'required autoComplete='off' placeholder='Phone.NO'/>
            </div>
            <div className={Style.inputs}>
                {/* <label htmlFor="password">Password:</label><br /> */}
                <input type="password" id='password'required autoComplete='off' placeholder='Password'/>
            </div>
            <div>
                <Button/>
            </div>


        </form>
            
        </>
    )
}

export default Form
