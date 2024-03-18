import { Fan, Bell, CircleUserRound } from "lucide-react"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="grid grid-rows-2 bg-blue-950">
                <div className="row-start-1 row-end-1 border-b-2 border-zinc-600 flex justify-between py-1">
                    <div className="flex gap-3">
                        <span className="flex items-center ml-2">
                            <Fan size={24} color="#ffffff" strokeWidth={1.75} />
                        </span>
                        <h1 className="text-white font-semibold text-2xl items-center">ASC</h1>
                        <p className="text-zinc-400 flex items-end">Air Control System</p>
                    </div>
                    <div className="flex gap-3 text-zinc-300 mr-2 items-center">
                        <span>
                            <Bell size={20} color="#ffffff" strokeWidth={1.75} />
                        </span>
                        <p>GABRIEL ROCHA PINHEIRO</p>
                        <span>
                            <CircleUserRound size={20} color="#ffffff" strokeWidth={1.75} />
                        </span>
                        <p className="border-2 px-2 border-zinc-400">v0.0.1</p>
                    </div>
                </div>
                <div className="row-start-2 row-end-2 flex items-center">
                    <ul className="flex gap-3 text-zinc-400 ml-2">
                        <li className="border-r-2 px-3"><Link to={"/"}>Dashboard</Link></li>
                        <li><Link to={"/control"}>Control</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}