import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Whoops, there it isn't!</h2>
            <p>The page you're looking for doesn't exist</p>
            <Link to='/'>Find your way back…</Link>
        </div>


    );
}
 
export default NotFound;