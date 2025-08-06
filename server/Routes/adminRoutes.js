import { postSignUp } from "../Controllers/postSignUp.js";

 export function adminRoutes(app){
    app.post('/signup',postSignUp)
}