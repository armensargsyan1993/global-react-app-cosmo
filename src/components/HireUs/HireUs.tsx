import React, { useState } from "react"
import styles from './hireUs.module.scss'
import { useForm } from "react-hook-form"
import { CheckBox } from "../CheckBox/CheckBox";

type Inputs = {
  name: string,
  Email: string,
  isChecked:any
};

export const HireUs = () => {
    const [sended, setSended] = useState(false)
    const names = ['App Design','Graphic Design','Motion Design','UX Design','Web Design','Marketing'];
    const { register, handleSubmit, watch, errors, reset } = useForm<Inputs>();
    const onSubmit = (data:any,event:any) => {
        alert('your data has been sent to the dataBase')
        setSended(true)
        setTimeout(() => {
            setSended(false)
            event?.target.reset()
        },4000)
    };
    return (
        <section className={styles.hireUs}>
            <div className={styles.title}>
                <h2>You want us to do</h2>
            </div>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={`row ${styles.row}`}>
                        <CheckBox errors={errors}  col={4} register={register} name={'isChecked'}>{names[0]}</CheckBox>
                        <CheckBox errors={errors}  col={4} register={register} name={'isChecked'}>{names[1]}</CheckBox>
                        <CheckBox errors={errors}  col={4} register={register} name={'isChecked'}>{names[2]}</CheckBox>
                    </div>
                    <div className={`row ${styles.row}`}>
                        <CheckBox errors={errors} col={6} register={register} name={'isChecked'}>{names[3]}</CheckBox>
                        <CheckBox errors={errors} col={6} register={register} name={'isChecked'}>{names[4]}</CheckBox>
                    </div>
                    <div className={`row ${styles.row}`}>
                        <CheckBox errors={errors} col={12} register={register} name={'isChecked'}>{names[5]}</CheckBox>
                    </div>
                        
                    <div className={styles.bottomFormWrapper}>
                        <div className={styles.bottomForm}>
                            <input className={errors.name && styles.empty} name="name" placeholder="name" ref={register({ required: true })} />
                            <input className={errors.Email && styles.empty} name="Email" placeholder="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                        </div>
                        {sended ? 'thank you for using our services, we will contact you shortly' : <input value="send" type="submit" />}
                    </div>
                </form>
            </div>
        </section>
    )
}