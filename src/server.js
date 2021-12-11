import express  from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web';
import initAPIRoute from './route/api'
//import connectDB from '../configs/connectDB'


require('dotenv').config();

const app = express()
const port = process.env.PORT || 3001

// hỗ trợ gửi data từ phía client lên phía server, lấy data 1 cách đơn giản
app.use(express.urlencoded({ extended: true})); 
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})