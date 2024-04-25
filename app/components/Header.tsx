import Image from "next/image"
import Logo from '../images/logo.png'

export default function Header(){
    return(
        <div className="w-10/12 mx-auto h-28 items-center flex">
            <Image src={Logo} alt="" className="w-12"/>
        </div>
    )
}