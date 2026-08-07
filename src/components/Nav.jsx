import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <div className="container">
            <nav className="mt-4">
        <Link to="/" className="text-decoration-none me-4">Home</Link>
        <Link to="/architecture" className="text-decoration-none me-4">Architecture</Link>
        <Link to="/about" className="text-decoration-none me-4" >About</Link>
            </nav>
        </div>
    )
}