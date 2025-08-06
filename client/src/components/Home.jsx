import { Link } from "react-router-dom";

function Home(){

return(

   <div className="p-6">
  <h1 className="text-2xl font-bold mb-4">Home</h1>
  <p className="mb-4">
    Welcome! This application is designed for{" "}
    <strong>intern registrations</strong> for various events.  
    Simply click on the{" "}
    <Link to="/register" className="text-blue-600 underline">
      Register Form
    </Link>{" "}
    to submit your details. The form will ask for your{" "}
    <em>name</em>, <em>email</em>, <em>domain</em>, and a short{" "}
    <em>message</em> — try filling some of it to get a feel for how it works!
  </p>

  <p className="mb-4">
    Your information is stored securely and can only be accessed by the
    admin. We value your privacy and take data protection seriously.
  </p>

  <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded mb-4">
    <strong>Note:</strong> To view the detalis in{" "}
    <span className="font-semibold">Admin Panel</span>, you must first
    register and then sign in with your credentials.
  </div>

  <button className="bg-amber-100 px-4 py-2 rounded shadow">
    <Link to="/register">Register Form</Link>
  </button>
</div>
)

}
export default Home;