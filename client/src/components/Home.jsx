import { Link } from "react-router-dom";

function Home(){

return(

    <div>
        <h1>Home</h1>
        <p>This Application is used for registering for various events.Just click on <Link to="/register">Register Form</Link> to register your detalis.Your detalis can only be seen by the admin so yours detalis are secure </p>
        <button className="bg-amber-100">Register Form</button>
    </div>
)

}
export default Home;