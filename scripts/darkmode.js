// const modeButton = document.querySelector("#mode");
// const main = document.querySelector("main");

// modeButton.addEventListener("click", () => {
// 	if (modeButton.textContent.includes("🕶️")) {
// 		main.style.background = "#111";
// 		main.style.color = "#111";
// 		modeButton.textContent = "🔆";
// 	} else {
// 		main.style.background = "#eee";
// 		main.style.color = "#000";
// 		modeButton.textContent = "🕶️";
// 	}
// });

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
// const containers = document.querySelector("card")

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#999";
		main.style.color = "#111";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#d1d1d1";
		main.style.color = "black";
		modeButton.textContent = "🕶️";
	}
});