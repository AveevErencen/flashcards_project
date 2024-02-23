import express, { urlencoded } from 'express';
import path from 'path';
import morgan from 'morgan';
import jsxRender from './utils/jsxRender';
import indexRender from './routers/indexRender';
import indexApi from './routers/indexApi';

const app = express();
const PORT = 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(urlencoded({ extends: true }));
app.use(express.json());

app.use('/', indexRender);
app.use('/api', indexApi);

app.listen(PORT, () => {
  console.log('start');
});
