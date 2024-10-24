import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import * as db from './config/db/index.js';
import routes from './routers/index.js';
db.connect();
const port = 8080;
const app = express();
//dùng để lấy data từ form khi post lên server
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// cho phép truy cập từ trình duyệt vào những file tĩnh trong thư mục public
app.use(express.static(path.join(process.cwd(), 'src', 'public')));

//template engine
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
        //helpers: helpers,
    }),
);
app.set('view engine', 'hbs');
//process.cwd() sẽ lấy thư mục gốc của dự án => NodeJS - learning
app.set('views', path.join(process.cwd(), 'src', 'resources', 'views'));

//Route init
app.use(express.json());
routes(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
