import { assets } from "@/assets/assets";
import Sidebar from "@/Components/adminComponents/sidebar";
import Image from 'next/image';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({children}){
    return (
        <>
        <div className="flex">
            <ToastContainer theme="dark"/>
            <Sidebar/>
            <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between w-full ppy-3 max--[60px] px-12 border border-black">
                          <h3 className="font-medium">ADMIN PANEL</h3>
                            <Image src={assets.profile_icon} width={40} alt=""/>
                        </div>
                        {children}
            </div>
        </div>
        
        </>
    )
}