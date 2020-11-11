import React from "react"
import styles from './hireUs.module.scss'
import { useForm } from "react-hook-form"
import { CheckBox } from "../CheckBox/CheckBox";

type Inputs = {
  name: string,
  mail: string,
};

export const HireUs = () => {
    const names = ['App Design','Graphic Design','Motion Design','UX Design','Web Design','Marketing'];
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();
    const onSubmit = (data:any) => console.log(data);
    return (
        <section className={styles.hireUs}>
            <div className={styles.title}>
                <h2>You want us to do</h2>
            </div>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={`row ${styles.row}`}>
                        {new Array(3).fill('a').map((_,i) => {
                            return <CheckBox key={i}  col={4} register={register} name={names[i]}>{names[i]}</CheckBox>
                        })}
                        {/* <CheckBox  col={4} register={register} name={names[0]}>{names[0]}</CheckBox>
                        <CheckBox  col={4} register={register} name={names[1]}>{names[1]}</CheckBox>
                        <CheckBox  col={4} register={register} name={names[2]}>{names[2]}</CheckBox> */}
                    </div>
                    <div className={`row ${styles.row}`}>
                        <CheckBox col={6} register={register} name={names[3]}>{names[3]}</CheckBox>
                        <CheckBox col={6} register={register} name={names[4]}>{names[4]}</CheckBox>
                    </div>
                    <div className={`row ${styles.row}`}>
                        <CheckBox col={12} register={register} name={names[5]}>{names[5]}</CheckBox>
                    </div>
                        
                    <div className={styles.bottomFormWrapper}>
                        <div className={styles.bottomForm}>
                            <input name="name" placeholder="name" ref={register({ required: true })} />
                            <input name="mail" placeholder="mail" ref={register({ required: true })} />
                        </div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </section>
    )
}