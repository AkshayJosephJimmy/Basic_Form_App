import { postDetalis } from '../Controllers/postDetalis.js';
import { getDetalis } from '../Controllers/getDetalis.js';
import { verifyToken } from '../Middleware/verifyToken.js';

export function getFormRoutes(app) {
app.post('/register',postDetalis)
app.get('/interns',verifyToken ,getDetalis);


}










