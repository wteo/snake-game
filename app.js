function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const snake = document.querySelector("#snake");
const mouse = document.querySelector("#mouse");

window.addEventListener("keydown", function(e) {
        if (e.key === "ArrowDown" || e.key === "Down") {
            const currentPosition = extractPosition(snake.style.top);
            snake.style.top = `${currentPosition + 50}px`;
            snake.style.transform = "rotate(90deg)"
            console.log(e);
        } else if (e.key === "ArrowUp" || e.key === "Up") {
            const currentPosition = extractPosition(snake.style.top);
            snake.style.top = `${currentPosition - 50}px`;
            snake.style.transform = "rotate(270deg)";
            console.log(e);
        } else if (e.key === "ArrowRight" || e.key === "Right") {
            const currentPosition = extractPosition(snake.style.left);
            snake.style.left = `${currentPosition + 50}px`;
            snake.style.transform = "rotate(0deg)";
            console.log(e);
        } else if (e.key === "ArrowLeft" || e.key === "Left") {
            const currentPosition = extractPosition(snake.style.left);
            snake.style.left = `${currentPosition - 50}px`;
            snake.style.transform = "rotate(180deg)";
            console.log(e);
        }
        if(isTouching(snake, mouse)) {
            moveMouse()
            }; 
        })
    
    const extractPosition = (pos) => {
        if (!pos) return 0;
        return parseInt(pos.slice(0,-2))
    }

function moveMouse () {
    const width = Math.floor(Math.random() * window.innerWidth);
    const height = Math.floor(Math.random() * window.innerHeight);
    mouse.style.top = `${width}px`;
    mouse.style.left = `${height}px`;
}

moveMouse();