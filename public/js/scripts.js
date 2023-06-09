
// --SCROLL TO TOP BUTTON--
let mybutton = document.getElementById("dropbtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// myFunction();

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

topFunction();





// -- Comment Function --//

// const form = document.getElementById('post-form');
// const postList = document.getElementById('post-list');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const role = document.querySelector('input[name="role"]:checked').value;
//     const content = document.getElementById('content').value;
//     const date = new Date();

//     const post = `
// 		<div class="post">
// 			<h2>${name}</h2>
// 			<p>${role}</p>
// 			<p>${date.toLocaleString('en-US', { timeZone: 'America/New_York' })}</p>
// 			<p>${content}</p>
// 		</div>
// 	`;

//     postList.insertAdjacentHTML('afterbegin', post);

//     form.reset();
// });