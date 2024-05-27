
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
    <div className="flex justify-between items-center p-4">
        <div className="logo">Logo.</div>
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
