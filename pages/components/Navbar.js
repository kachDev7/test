import Link from 'next/link'

const Navbar = () =>{
    return (
        <nav>
            <div>
                <h1>Shannels</h1>
                <div>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/people/mine"><a>Chat</a></Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;