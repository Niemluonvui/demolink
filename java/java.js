//scrollreveal
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})
sr.reveal(`.revealtop`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.revealleft`,{
    origin: 'left',
})

sr.reveal(`.revealright`,{
    origin: 'right',
    interval: 100,
})
//change color header
window.addEventListener('scroll', (event) => {
    var y = window.scrollY;
    if ( y > 20){
        document.querySelector('footer').style.top = document.querySelector('main').clientHeight + 'px';
        document.querySelector('.logo').style.filter = 'invert(1)';
        document.querySelector('header').style.background = '#100c07';
        document.querySelector('.topelement.one').style.color = '#F8F8FF';
        document.querySelector('.topelement.two').style.color = '#F8F8FF';
        document.querySelector('.topelement.three').style.color = '#F8F8FF';
        document.querySelector('.topelement.four').style.color = '#F8F8FF';
    } else {
        document.querySelector('.logo').style.filter = 'invert(0)';
        document.querySelector('header').style.background = 'transparent';
        document.querySelector('.topelement.one').style.color = '#100c07';
        document.querySelector('.topelement.two').style.color = '#100c07';
        document.querySelector('.topelement.three').style.color = '#100c07';
        document.querySelector('.topelement.four').style.color = '#100c07';
    }
});
//groups
var gr_one = {
    fir_pic:"../pics/groups/photoshopcourse.png",
    sec_pic:"../pics/groups/photoshopcourse_2.png",
    thi_pic:"../pics/groups/photoshopcourse_3.png"
}
var gr_two = {
    fir_pic:"../pics/groups/pascalcourse.png",
    sec_pic:"../pics/groups/html-css.png",
    thi_pic:"../pics/groups/javascript.png"
}
var gr_three = {
    fir_pic:"../pics/groups/learnhowtofilm.png",
    sec_pic:"../pics/groups/learnhowtoaudio.png",
    thi_pic:"../pics/groups/learnhowtoedit.png"
}
//grouppic_changing
function currentGroup(i) {
    if (i == 1) {
        fr_list[0].style.backgroundImage = 'url('+gr_one.fir_pic+')';
        fr_list[1].style.backgroundImage = 'url('+gr_one.sec_pic+')';
        fr_list[2].style.backgroundImage = 'url('+gr_one.thi_pic+')';
    } else if (i == 2) {
            fr_list[0].style.backgroundImage = 'url('+gr_two.fir_pic+')';
            fr_list[1].style.backgroundImage = 'url('+gr_two.sec_pic+')';
            fr_list[2].style.backgroundImage = 'url('+gr_two.thi_pic+')';
    }else {
                fr_list[0].style.backgroundImage = 'url('+gr_three.fir_pic+')';
                fr_list[1].style.backgroundImage = 'url('+gr_three.sec_pic+')';
                fr_list[2].style.backgroundImage = 'url('+gr_three.thi_pic+')';
    }
}
//pic changing
var old_index = 0;
var fr_list = document.getElementsByClassName('frames');
var dot_list = document.getElementsByClassName('dot');
const timeId = setInterval(() => {
    autoSlide()
}, 5000);
function autoSlide() {
    if ((old_index + 1) == fr_list.length) {
        currentSlide(0);
    } else {
        currentSlide(old_index + 1)
    }
}
function currentSlide(i) {
    fr_list[old_index].style.height = '420px';
    fr_list[i].style.height = '450px';
    dot_list[old_index].classList.remove('active');
    dot_list[i].classList.add('active');
    old_index = i;
}
//scroll
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        b -= 7;
        i++; if (i > 20) return;
        c.scrollTop = a + (b - a) / 20 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
