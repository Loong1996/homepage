// 所有界面
let pages = [];
pages[0] = document.getElementById('page-intro')
pages[1] = document.getElementById('page-main')

let page_idx = 0;
// 翻页函数
function flipPage() {
    if (page_idx == 1) {
      page_idx = 0;
      pages[0].style.transform = `translateY(0)`;
    }
    else
    {
      page_idx = 1;
      pages[0].style.transform = `translateY(-100%)`;
    }
}

// 添加事件
const arrows = document.querySelectorAll('.intro-arrow');
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', flipPage);
    arrows[i].addEventListener('touchstart', flipPage);
  // 鼠标进入
    arrows[i].addEventListener('mouseover', () => {
        hoverTimer = setTimeout(() => {
            flipPage();
        }, 100); // 设置延迟时间为500ms
    });

    // 鼠标离开
    arrows[i].addEventListener('mouseout', () => {
        clearTimeout(hoverTimer); // 清除定时器
    });
}

document.querySelector('.intro-enter').addEventListener('click', flipPage);
document.querySelector('.intro-enter').addEventListener('touchstart', flipPage);