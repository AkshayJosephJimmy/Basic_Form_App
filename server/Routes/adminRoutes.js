import { postSignUp } from "../Controllers/postSignUp.js";
import { postSignIn } from "../Controllers/postSignIn.js";

 export function adminRoutes(app){
    app.post('/signup',postSignUp)
    app.post('/signin', postSignIn);
 }