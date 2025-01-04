import "./styles.css"

const content_div = document.querySelector('#content');

function show_home(){
    let main_div = document.createElement('div');
    content_div.appendChild(main_div);
    main_div.classList.toggle('normal-flex')
    main_div.style.flexDirection = 'column';

    let title_div = document.createElement('div');
    main_div.appendChild(title_div);
    title_div.classList.toggle('title');
    title_div.textContent = 'Welcome to PEAK';

    let desc_div = document.createElement('div');
    main_div.appendChild(desc_div);
    desc_div.classList.toggle('normal-flex');
    desc_div.textContent = "In this PEAK restaurant, we only serve PEAK menus, so don't worry about ordering something mid, all of them is peak. And if something is not to your liking, then you just have shit taste."
}

export default show_home;