import React from "react"
import styles from './logotype.module.scss'
export const Logotype:React.FC = () => {
    return (
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            width="33px" height="32px"  viewBox="0 0 33 32"
        >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#0d41f6" stopOpacity="1"/>
                        <stop offset="82%" stopColor="#07d2b3" stopOpacity="1"/>
                        <stop offset="100%" stopColor="#07d2b3" stopOpacity="1"/>
                    </linearGradient>
                </defs>
            <path fillRule="evenodd"  fill="url(#grad1)"
            d="M4.058777,12.309277 C5.195862,12.309277 6.1176453,13.507557 6.1176453,14.985603 C6.1176453,14.985603 6.1176453,18.026543 6.1176453,18.026543 C6.1176453,19.50515 5.195862,20.703175 4.058777,20.703175 C2.9217682,20.703175 1.9999847,19.50515 1.9999847,18.026543 C1.9999847,18.026543 1.9999847,14.985603 1.9999847,14.985603 C1.9999847,13.507557 2.9217682,12.309277 4.058777,12.309277 ZM29.941193,12.309277 C31.078201,12.309277 31.999985,13.507557 31.999985,14.985603 C31.999985,14.985603 31.999985,18.026543 31.999985,18.026543 C31.999985,19.50515 31.078201,20.703175 29.941193,20.703175 C28.804108,20.703175 27.882324,19.50515 27.882324,18.026543 C27.882324,18.026543 27.882324,14.985603 27.882324,14.985603 C27.882324,13.507557 28.804108,12.309277 29.941193,12.309277 ZM10.529419,8.029327 C11.666428,8.029327 12.588211,9.227911 12.588211,10.705658 C12.588211,10.705658 12.588211,22.292458 12.588211,22.292458 C12.588211,23.770504 11.666428,24.968788 10.529419,24.968788 C9.392334,24.968788 8.470551,23.770504 8.470551,22.292458 C8.470551,22.292458 8.470551,10.705658 8.470551,10.705658 C8.470551,9.227911 9.392334,8.029327 10.529419,8.029327 ZM23.47055,8.029327 C24.607635,8.029327 25.529419,9.227911 25.529419,10.705658 C25.529419,10.705658 25.529419,22.292458 25.529419,22.292458 C25.529419,23.770504 24.607635,24.968788 23.47055,24.968788 C22.333542,24.968788 21.411758,23.770504 21.411758,22.292458 C21.411758,22.292458 21.411758,10.705658 21.411758,10.705658 C21.411758,9.227911 22.333542,8.029327 23.47055,8.029327 ZM16.999985,1.9999809 C18.139053,1.9999809 19.062515,2.9234314 19.062515,4.0624924 C19.062515,4.0624924 19.062515,27.9375 19.062515,27.9375 C19.062515,29.0766 18.139053,30.000011 16.999985,30.000011 C15.860916,30.000011 14.9375305,29.0766 14.9375305,27.9375 C14.9375305,27.9375 14.9375305,4.0624924 14.9375305,4.0624924 C14.9375305,2.9234314 15.860916,1.9999809 16.999985,1.9999809 Z"/>
        </svg>
    )
}