//////////////////////////////////////////////////////////////////
// 内容淡入效果
//////////////////////////////////////////////////////////////////
setTimeout(()=>{
    document.querySelector('.intro-content').classList.add('in');
}, 0);

//////////////////////////////////////////////////////////////////
// 子标题--大字机效果
//////////////////////////////////////////////////////////////////
var subtitle_elem = document.querySelector('.intro-content-subtitle');

// var type_speed = 75;
// var delay = subtitle_elem.innerHTML.length * type_speed;

// typeEffect(subtitle_elem, type_speed);

// function typeEffect(element, speed) {
//     var text = element.innerHTML;
//     if (text.length > 0) {
//         element.innerHTML = text[0];
//         text = text.substring(1);
//     }

//     var i = 0;
//     var timer = setInterval(function() {
//         if (i < text.length) {
//             element.append(text.charAt(i));
//             i++;
//         } else {
//             clearInterval(timer);
//         }
//     }, speed);
// }

let subtitle = subtitle_elem.getAttribute('orginal-content');
if (subtitle.length > 0) {
    let subtitle_css =
    `
    .intro-content-subtitle span {
        animation: letter-glow .7s 0s ease both
    }

    @keyframes letter-glow {
        0% {
            opacity: 0;
            text-shadow: 0 0 1px hsla(0,0%,100%,.1)
        }
     
        66% {
            opacity: 1;
            text-shadow: 0 0 20px hsla(0,0%,100%,.9)
        }
     
        77% {
            opacity: 1
        }
     
        to {
            opacity: .7;
            text-shadow: 0 0 20px hsla(0,0%,100%,.2)
        }
    }\n`;

    for (let i = 0; i < subtitle.length; ++i) {
        let delay = 50 * (i + 1); // 这里设置显示速度
        subtitle_css += `.intro-content-subtitle span:nth-child(${i+1}) { animation-delay: ${delay}ms; } \n`;
    }

    const style = document.createElement('style');
    style.appendChild(document.createTextNode(subtitle_css));
    document.head.appendChild(style);
}

setTimeout(() => {

    let innerHTML = "";
    for (let i = 0; i < subtitle.length; ++i) {
        innerHTML += "<span>" + subtitle[i] + "</span>";
    }
    subtitle_elem.innerHTML = innerHTML;

}, 270);
