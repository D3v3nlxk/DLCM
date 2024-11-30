console.log(` _____ ______    ________   ________   _______           ________       ___    ___      ________   ___  ___   ________   ________   ________     
|\\   _ \\  _   \\ |\\   __  \\ |\\   ___ \\ |\\  ___ \\         |\\   __  \\     |\\  \\  /  /|    |\\   ____\\ |\\  \\|\\  \\ |\\   __  \\ |\\   ____\\ |\\   __  \\    
\\ \\  \\\\\\__\\ \\  \\\\ \\  \\|\\  \\\\ \\  \\_|\\ \\\\ \\   __/|        \\ \\  \\|\\ /_    \\ \\  \\/  / /    \\ \\  \\___| \\ \\  \\\\\\  \\\\ \\  \\|\\  \\\\ \\  \\___| \\ \\  \\|\\  \\   
 \\ \\  \\\\|__| \\  \\\\ \\   __  \\\\ \\  \\ \\\\ \\\\ \\  \\_|/__       \\ \\   __  \\    \\ \\    / /      \\ \\  \\     \\ \\   __  \\\\ \\  \\\\\\  \\\\ \\  \\     \\ \\  \\\\\\  \\  
  \\ \\  \\    \\ \\  \\\\ \\  \\ \\  \\\\ \\  \\_\\\\ \\\\ \\  \\_|\\ \\       \\ \\  \\|\\  \\    \\/  /  /        \\ \\  \\____ \\ \\  \\ \\  \\\\ \\  \\\\\\  \\\\ \\  \\____ \\ \\  \\\\\\  \\ 
   \\ \\__\\    \\ \\__\\\\ \\__\\ \\__\\\\ \\_______\\\\ \\_______\\       \\ \\_______\\ __/  / /           \\ \\_______\\\\ \\__\\ \\__\\\\ \\_______\\\\ \\_______\\\\ \\_______\\
    \\|__|     \\|__| \\|__|\\|__| \\|_______| \\|_______|        \\|_______||\\___/ /             \\|_______| \\|__|\\|__| \\|_______| \\|_______| \\|_______|
                                                                      \\|___|/                                                                    
                                                                                                                                                 
                                                                                                                                                 `);

// 获取页面容器
const pageContainer = document.querySelector('.page-container');

// 获取跳转按钮
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');

// 按钮数组
const buttons = [button1, button2, button3, button4, button5];
buttons[1].classList.add('show');
buttons[2].classList.add('show');
buttons[3].classList.add('show');
buttons[4].classList.add('show');
// 页面跳转函数
function goToPage(pageNumber) {
    // 设置页面容器的 transform 样式，实现水平滑动
    pageContainer.style.transform = `translateX(-${(pageNumber - 1) * 100}vw)`;


    // 每次跳转时隐藏所有按钮
    buttons.forEach(button => {
        button.classList.remove('show');
    });


    if (pageNumber === 1) {
        buttons[1].classList.add('show');
        buttons[2].classList.add('show');
        buttons[3].classList.add('show');
        buttons[4].classList.add('show');
    }

}

// 绑定按钮点击事件
button1.addEventListener('click', () => goToPage(1));
button2.addEventListener('click', () => goToPage(2));
button3.addEventListener('click', () => goToPage(3));
button4.addEventListener('click', () => goToPage(4));
button5.addEventListener('click', () => goToPage(5));

