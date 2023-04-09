import { app } from './app.js';
import { router } from './routes/route.js'

app.use(router);

app.listen(8000, ()=>{ console.log('server run'); })