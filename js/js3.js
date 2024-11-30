

const cardsData = [
    {
        name: "D3v3n",
        title: "专注于逆向工程，精通各类漏洞分析。",
        for:"Re",
        image: "https://devenlxk.oss-cn-shenzhen.aliyuncs.com/img/202404111123719.jpg",
        blogLink: "https://d3v3nlxk.github.io/"
    },
    {
        name: "misak",
        title: "在漏洞利用与二进制攻击方面有丰富经验。",
        for:"Pwn",
        image: "https://blog.milkory.com/images/background-5262f93ef209382ef5bcb0d4aaa6933e.jpg",
        blogLink: "https://blog.milkory.com/"
    },
    {
        name: "CH0ico",
        title: "擅长Web安全、漏洞挖掘与渗透测试",
        for:"Web",
        image: "https://img.dkdun.cn/v1/2024/7/0893df6f05fa2547.jpg",
        blogLink: "https://ch0ico.fun/"
    },
    {
        name: "Lst4r",
        title: "在密码学领域具有深厚的理论基础。",
        for:"Crypto",
        image: "https://lst4r-max.github.io/img/1.jpg",
        blogLink: "https://lst4r-max.github.io/"
    },
    {
        name: "Nop",
        title: "IOT IOV大神",
        for:"IOT",
        image: "https://avatars.githubusercontent.com/u/147847358?v=4",
        blogLink: "https://github.com/Nop3z/"
    }
    // 可以继续添加更多的卡片数据
];

// 获取容器
const container = document.querySelector('.cards-container');
console.log(`made by choco`);

cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
        <div class="imgBx">
            <img src="${card.image}" alt="${card.name}">
        </div>

        <div class="content">
            <div class="details">
                <h3>${card.name}</h3>
                <h2>${card.for}<br><span>${card.title}</span></h2>
            <a href="${card.blogLink}" target="_blank" class="blog-btn">访问博客</a>
            </div>
        </div>
    `;
    container.appendChild(cardElement);
});
