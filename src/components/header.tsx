import Image from 'next/image'
import Logo from '../assets/Logo.svg'

export default function Header() {

    const navLinks = [
        {
            href:'/',
            label:'Home'
        },
        {
            href:'/contact',
            label:'Contact'
        }
    ]


  return (
    <div className="flex justify-between items-center p-4 fixed w-full left-0 top-0 bg-slate-400">
        <div className="logo">
            <Image 
            loading='lazy'
            src= {Logo}
            width={100}
            height={100}
            alt='logo'
            />
        </div>
        <div className="list">
            <ul className="flex gap-3">
                {navLinks.map((link) =>(
                    <li key={link.href} className="transition-colors hover:text-slate-400">
                       <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
