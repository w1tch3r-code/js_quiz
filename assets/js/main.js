"use strict";

// ====================================================================
//     				JS-Vertiefung – Project Quiz
// ====================================================================

console.log("%c JS-Vertiefung – Project Quiz", "color: tomato");

// ====================================================================
//    	 						Quiz Array
// ====================================================================

let data = [
	{
		url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
		question: "Which ocean lies on the east coast of the United States?",
		choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
		answer: "Atlantic",
	},
	{
		url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
		question: "Which is the world's highest mountain?",
		choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
		answer: "Mount Everest",
	},
	{
		url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
		question: "Which of these cities is not in Europe?",
		choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
		answer: "Moscow",
	},
	{
		url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
		question: "True or False: Iceland is covered in ice.",
		choice: [true, false],
		answer: false,
	},
	{
		url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
		question: "The United Kingdom is comprised of how many countries?",
		choice: [1, 2, 3, 4],
		answer: 4,
	},
	{
		url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
		question: "Which of the following countries do not border France?",
		choice: ["Germany", "Netherlands", "Spain", "Italy"],
		answer: "Netherlands",
	},
	{
		url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
		question: "Which U.S. state is the Grand Canyon located in?",
		choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
		answer: "Arizona",
	},
	{
		url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
		question: "Which is the smallest country, measured by total land area?",
		choice: ["Maldives", "Monaco", "Vatican"],
		answer: "Vatican",
	},
	{
		url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
		question: "Which is the longest river in the world?",
		choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
		answer: "Nile River",
	},
	{
		url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
		question: "Which is the largest body of water?",
		choice: [
			"indian Ocean",
			"Pacific Ocean",
			"Atlantic Ocean",
			"Nile River",
		],
		answer: "Pacific Ocean",
	},
];

// Kopie des Original-Arrays
const newDataArr = [...data];

// ====================================================================
//  					Anzeigen des gesamten Quiz
// ====================================================================

const newContent = (elem) => {
	const divContent = document.querySelector("#content");
	// Div - h2 - Image - Generierung
	const newDiv = document.createElement("div");
	const newH2 = document.createElement("h2");
	const newImg = document.createElement("img");

	// Image Attributzuweisungen
	newImg.setAttribute("src", elem.url);
	newImg.setAttribute("alt", "Playbuzz Image");
	// Anhängen der Images an das jeweilige Div
	newDiv.appendChild(newImg);
	// Zuweisung der Headlinetexte mit den jeweiligen Fragen aus dem Array
	newH2.textContent += `${elem.question}`;
	// Anhängen der Headlines an das jeweilige Div
	newDiv.appendChild(newH2);

	// Button Generierung abhängig von der jeweiligen Antwortenlänge der Objekte im Array
	for (let i = 0; i < elem.choice.length; i++) {
		const newBtn = document.createElement("button");
		newBtn.setAttribute("type", "button");
		// Zuweisung der Buttontexte mit den jeweiligen Antworten aus dem Array
		newBtn.textContent += `${elem.choice[i]}`;
		// Anhängen der Buttons an das jeweilige Div
		newDiv.appendChild(newBtn);
	}
	// Kompletten Div-Container in divContent einfügen
	divContent.appendChild(newDiv);
};

newDataArr.forEach((elem) => {
	// Aufruf der Funktion newContent und Übergabe des Parameters elem aus dem Array an die Funktion
	newContent(elem);

	// Button Logik - Antworten richtig oder falsch?
	document.querySelectorAll("button").forEach((btn) => {
		btn.addEventListener("click", () => {
			// Überprüfung, ob der Button Text mit der richtigen Antwort aus dem Array übereinstimmt
			if (btn.textContent === elem.answer.toString()) {
				btn.classList.add("btnGreen");
				btn.classList.add("disabled");
			} else {
				btn.classList.add("btnRed");
				btn.classList.add("disabled");
			}

			// Deaktivierung der anderen Button in der gleichen Reihe,
			// wenn auf einen Button geklickt wurde
			const buttonsInRow = btn.parentElement.querySelectorAll("button");
			buttonsInRow.forEach((otherBtn) => {
				if (otherBtn !== btn) {
					otherBtn.classList.add("disabled");
					// Bei falscher Antwort zusätzlich dem Button mit der richtigen Antwort
					// die Klasse "btnGreen" zuweisen
					if (otherBtn.textContent === elem.answer.toString()) {
						otherBtn.classList.add("btnGreen");
					}
				}
			});
		});
	});
});
