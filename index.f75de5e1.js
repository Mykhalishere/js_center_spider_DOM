"use strict";
document.addEventListener("DOMContentLoaded", function() {
    const wall = document.querySelector(".wall");
    const spider = document.querySelector(".spider");
    if (wall && spider) {
        wall.style.position = "relative";
        const wallRect = wall.getBoundingClientRect();
        const wallWidth = wallRect.width;
        const wallHeight = wallRect.height;
        const spiderRect = spider.getBoundingClientRect();
        const spiderWidth = spiderRect.width;
        const spiderHeight = spiderRect.height;
        const spiderLeft = (wallWidth - spiderWidth) / 2;
        const spiderTop = (wallHeight - spiderHeight) / 2;
        spider.style.position = "absolute";
        spider.style.left = `${spiderLeft}px`;
        spider.style.top = `${spiderTop}px`;
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
