const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey i'm Red";
para.style.color = 'red';
container.appendChild(para);

const heading3 = document.createElement("h3");
heading3.classList.add('heading3');
heading3.textContent = 'I am a blue h3';
heading3.style.color = 'blue';

container.appendChild(heading3);

const div = document.createElement('div');
div.classList.add('pinkDiv');
div.style.backgroundColor = 'pink';
div.style.borderColor = 'black';

const heading1 = document.createElement('h1');
heading1.textContent = "I'm in a Div";
const paraNew = document.createElement('p');
paraNew.textContent = "ME TOO!"

div.appendChild(heading1);
div.appendChild(paraNew);


container.appendChild(div);

function alertFunction(){
    alert("yay you did it");
}

const btn = document.querySelector("#btn");

// btn.onclick = alertFunction;

// btn.addEventListener('click', alertFunction);

// btn.addEventListener('click', function(e){
//     console.log(e.target);
// }) amazing function to check if the target is the right one

// btn.addEventListener('click', function(e){
//     e.target.style.background = 'blue';
// }) very cool

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        alert(button.id);
    });
});

const UserName = document.createElement('h2');
UserName.classList.add("Name");
UserName.textContent = 'Awais';
UserName.style.borderColor = 'blue';
UserName.style.borderRadius = '100px';
UserName.style.backgroundColor = 'green';
UserName.style.textAlign = 'center';
UserName.style.fontFamily = 'inter';
UserName.style.fontSize = '5rem';
UserName.style.padding = '1rem';
UserName.style.color = '#503482';
UserName.style.transform = '100';

container.appendChild(UserName);