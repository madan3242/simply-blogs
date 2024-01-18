import app from "./src/app";
import { PORT } from "./src/config";

app.listen(PORT , ()=>{
    console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
})