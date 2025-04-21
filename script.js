const words = [
    {
        word: "Cześć",
        translation: "Hi / Hello",
        pronunciation: "cheshch",
        example: "Cześć, jak się masz?",
        english: "Hello, how's it going?"
    },
    {
        word: "Dziękuję",
        translation: "Thank you",
        pronunciation: "jen-KOO-yeh",
        example: "Dziękuję za pomoc.",
        english: "Thank you for your help."
    },
    {
        word: "Kot",
        translation: "Cat",
        pronunciation: "koht",
        example: "Mam czarnego kota.",
        english: "I have a black cat."
    },
    {
        word: "Pies",
        translation: "Dog",
        pronunciation: "p'yess",
        example: "Twój pies jest bardzo przyjazny.",
        english: "Your dog is very friendly."
    },
    {
        word: "Tak",
        translation: "Yes",
        pronunciation: "tahk",
        example: "Tak, chcę kawę.",
        english: "Yes, I want coffee."
    },
    {
        word: "Nie",
        translation: "No",
        pronunciation: "nyeh",
        example: "Nie, dziękuję.",
        english: "No, thank you."
    },
    {
        word: "Proszę",
        translation: "Please / You're welcome",
        pronunciation: "PRO-sheh",
        example: "Proszę usiąść.",
        english: "Please, have a seat."
    },
    {
        word: "Przepraszam",
        translation: "Sorry / Excuse me",
        pronunciation: "psheh-PRAH-sham",
        example: "Przepraszam za spóźnienie.",
        english: "Sorry for being late."
    },
    {
        word: "Dobry",
        translation: "Good",
        pronunciation: "DOH-brih",
        example: "To był dobry film.",
        english: "That was a good movie."
    },
    {
        word: "Dzień dobry",
        translation: "Good morning / Good day",
        pronunciation: "jyen DOH-brih",
        example: "Dzień dobry, pani Anna!",
        english: "Good morning, Mrs. Anna!"
    },
    {
        word: "Dobranoc",
        translation: "Good night",
        pronunciation: "doh-BRAH-notz",
        example: "Dobranoc, śpij dobrze.",
        english: "Good night, sleep well."
    },
    {
        word: "Do widzenia",
        translation: "Goodbye",
        pronunciation: "doh veed-ZEH-nya",
        example: "Do widzenia i do zobaczenia jutro!",
        english: "Goodbye and see you tomorrow!"
    },
    {
        word: "Miłość",
        translation: "Love",
        pronunciation: "MEE-woashch",
        example: "Miłość jest najważniejsza.",
        english: "Love is the most important thing."
    },
    {
        word: "Rodzina",
        translation: "Family",
        pronunciation: "roh-JEE-nah",
        example: "Mam dużą rodzinę.",
        english: "I have a big family."
    },
    {
        word: "Dom",
        translation: "Home / House",
        pronunciation: "dohm",
        example: "Wracam do domu.",
        english: "I'm going back home."
    },
    {
        word: "Szkoła",
        translation: "School",
        pronunciation: "SHKOH-wah",
        example: "Moja córka chodzi do szkoły.",
        english: "My daughter goes to school."
    },
    {
        word: "Miasto",
        translation: "City",
        pronunciation: "MYA-stoh",
        example: "Kraków to piękne miasto.",
        english: "Kraków is a beautiful city."
    },
    {
        word: "Jedzenie",
        translation: "Food",
        pronunciation: "yed-ZEH-nyeh",
        example: "Lubię polskie jedzenie.",
        english: "I like Polish food."
    },
    {
        word: "Woda",
        translation: "Water",
        pronunciation: "VOH-dah",
        example: "Czy mogę dostać wodę?",
        english: "Can I get some water?"
    },
    {
        word: "Kawa",
        translation: "Coffee",
        pronunciation: "KAH-vah",
        example: "Piję kawę każdego ranka.",
        english: "I drink coffee every morning."
    }
];

let currentIndex = 0;

function showWord(index) {
    const w = words[index];
    document.getElementById("word").textContent = w.word;
    document.getElementById("pronunciation").textContent = w.pronunciation;
    document.getElementById("translation").textContent = w.translation;
    document.getElementById("example").textContent = w.example;
    document.getElementById("english").textContent = w.english;
}

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % words.length;
    showWord(currentIndex);
});

showWord(currentIndex);
