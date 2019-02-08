import 'bootstrap'
import './scss/app.scss';

const root = document.createElement('div');
root.classList.add("container");
const row = document.createElement('div');
row.classList.add("row");
const col1 = document.createElement('div');
col1.classList.add("col-6");
col1.classList.add("border");
col1.classList.add("rounded");
const col2 = document.createElement('div');
col2.classList.add("col-6");
col2.classList.add("border");
col2.classList.add("rounded");
row.appendChild(col1)
row.appendChild(col2)
root.appendChild(row)

col1.innerHTML = '<p>Hello Webpack.</p>'
col2.innerHTML = '<p>Wahoooo.</p>'

document.body.appendChild(root);