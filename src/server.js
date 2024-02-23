import express, { urlencoded } from 'express';
import path from 'path';
import morgan from 'morgan';
import jsxRender from './utils/jsxRender';

const app = express();
const PORT = 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(urlencoded({ extends: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log('start');
});
