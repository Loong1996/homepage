let infos = [
    {
        text: 'Copyright © 2024 Loong'
    },
    {
        text: '闽ICP备2024039892号-1',
        href: 'http://beian.miit.gov.cn/'
    },
    {
        text: '闽公网安备35010402351226号',
        img: 'https://web.xxmd.com/wp-content/themes/b2/Assets/fontend/images/beian-ico.png',
        href: 'https://beian.mps.gov.cn/#/query/webSearch'
    }
];

let flooter = document.querySelector('.page-footer');

let html_text = "";
for (let i = 0; i < infos.length; ++i) {
    let info = infos[i];
    if (i != 0) {
        html_text += "<span class='page-flooter-info'> &nbsp;|&nbsp; </span>"
    }

    html_text += `<a class='page-flooter-info' href='${info.href}' target='_blank'>${info.text}</a>`;

}

flooter.innerHTML = html_text;