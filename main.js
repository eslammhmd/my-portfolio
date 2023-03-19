// --------------------------start animation for card of info-------------------------

function animationCard() {
    var elem = document.querySelector('.card');
    var animation = elem.animate({
        transform: ['scale(0.9)', 'scale(1)'],
    }, {
        direction: 'alternate',
        duration: 10000,
        iterations: Infinity,
    });
}
animationCard()
// ---------------------------------start hide and show on click----------------------------

document.getElementById('show-skills').onclick = () => {
    document.querySelector('.my-skill').classList.add('active');
    document.querySelector('.animation').classList.add('move')
}
// ----------------------------------start getcurrent year--------------------------
function getYear() {
    const year = new Date()
    document.getElementById('current-year').innerText = year.getFullYear()
}

getYear()



// --------------------------------start get dynamic paragraph------------------------


function typeWriter() {
    let para = document.getElementById('type-para')
    let text = `With Over 2 Years Of Experience, Of Building And Developing Professional Responsive Websites With the Highest Speed And Scalability That Enhance User Experience, I Just Want To Be The Best Version Of Myself, I Have A Vision And I Have My Confidence, And When Go Out There I Know What I'm Able To Do And I Do It Well. Feel Free To Contact Me.`
    let i = 0;
    // -----------------------------------clear setinterval by writer------------------------------------
    let writer = setInterval(() => {

        para.textContent += text[i];
        i++;


        if (i > text.length - 1) {
            clearInterval(writer)
        }

    }, 30);

}
typeWriter()





document.getElementById('next-page').onclick = () => {
    location.href = 'index2.html'
}