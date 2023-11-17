//Building a digital clock 
const clock= document.querySelector('.clock');

const tick = () => {

    const nowa = new Date();
    const h = nowa.getHours();
    const m = nowa.getMinutes();
    const s = nowa.getSeconds();

    //the html template for the digital clock
    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `;

    clock.innerHTML = html;

};

setInterval(tick, 1000); //this gives us an interval of 1 second, its making sure that the function updates every second.