//////////////////////////////////////////////////////////////////
// 内容淡入效果
//////////////////////////////////////////////////////////////////
setTimeout(()=>{
    document.querySelector('.intro-content').classList.add('in');
}, 0);

//////////////////////////////////////////////////////////////////
// 子标题--打印机效果
//////////////////////////////////////////////////////////////////
var subtitle_elem = document.querySelector('.intro-content-subtitle');

var type_speed = 75;
var delay = subtitle_elem.innerHTML.length * type_speed;

typeEffect(subtitle_elem, type_speed);

function typeEffect(element, speed) {
    var text = element.innerHTML;
    if (text.length > 0) {
        element.innerHTML = text[0];
        text = text.substring(1);
    }

    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}