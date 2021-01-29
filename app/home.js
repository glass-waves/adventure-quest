import { setUser } from '../local-storage/user-local.js';
import { createUser } from '../utils/create-user.js';

const myForm = document.getElementById('info-form');



myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(myForm);
    const user = createUser(formData);
    setUser(user);
    window.location = './html/map.html';
});



