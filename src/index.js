require('./styles/style.scss');
const newMessage = () => (`<div>hi</div>`);
const app = document.getElementById('app');
app.innerHTML = newMessage();

if (module.hot) {
    module.hot.accept();
}