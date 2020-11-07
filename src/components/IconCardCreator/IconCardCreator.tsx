import React from "react"

export const IconCardCreator = (props:any) => {
    if(props.arr && props.arr.length){
       return <div className={props.wrapperClassName}>
            {props.arr.map((elem:any,i:any) => {
            return (
                <div key={elem.title} className={props.iconCardWrapperClassName}>
                    <div className={props.className}>
                        {elem.title}
                    </div>
                </div>
            )
        })}
       </div>
    }
    return <>dont download yet</>

}