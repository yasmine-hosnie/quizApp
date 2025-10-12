# 🧠 Quiz App

An interactive **Quiz Application** built using **HTML, CSS, and JavaScript**.  
This app dynamically loads questions from a JSON file, tracks the user's progress, and shows the final score with styled feedback messages.

---

## 🎮 Live Demo
*(Add your live link here if hosted, e.g., GitHub Pages or Netlify)*  
👉 [Start Quiz](https://quiz-app-theta-umber-65.vercel.app/)

---

## 🧩 Overview

This **Quiz App** allows users to test their knowledge in HTML (or any other topic you define).  
Questions are fetched dynamically from a JSON file (`html_question.json`), and the app features:
- A countdown timer  
- Animated progress bullets  
- Instant feedback after each question  
- Automatic result calculation  
- Restart functionality

---

## ✨ Features

✅ Fetches questions from a local JSON file using **AJAX (XMLHttpRequest)**  
✅ Displays one question at a time with four multiple-choice answers  
✅ Countdown timer resets for each question  
✅ Tracks the number of correct answers  
✅ Dynamic progress indicator (bullets)  
✅ Displays final result with color-coded messages (Excellent, Good, Bad)  
✅ Fully responsive design  
✅ Restart button to replay the quiz  

---

## ⚙️ How It Works

1. **Start the Quiz:**
   - When the page loads, it automatically fetches questions from `html_question.json`.

2. **Answer Questions:**
   - The user selects one of four answers for each question.
   - Upon clicking “Submit Answer,” the app checks if the selected answer is correct.

3. **Progress Bullets:**
   - Visual bullets track which question you’re currently on.

4. **Countdown Timer:**
   - Each question has a **90-second timer**.
   - If the timer runs out, the question is automatically submitted.

5. **Final Results:**
   - At the end, the app displays:
     - 🟢 **Excellent** → All answers correct  
     - 🟡 **Good** → More than half correct  
     - 🔴 **Bad** → Less than half correct  
   - A **Restart button** appears to reload the quiz.

---

## 🧰 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure and quiz layout |
| **CSS3** | Styling, colors, and animations |
| **JavaScript (ES6)** | Game logic, dynamic question loading, and countdown timer |
| **JSON** | Stores question data (`html_question.json`) |

---

## 🗂️ Folder Structure

Quiz-App/
│
├── index.html # Main HTML structure
├── main.css # Styling and animations
├── main.js # JavaScript logic and functionality
├── html_question.json # JSON file containing all quiz questions
└── README.md # Project documentation

---

## 🚀 Setup & Run

### 🔧 1. Clone or Download
```bash
git clone https://github.com/yourusername/quiz-app.git
📂 2. Add Your Question File
Make sure to include your html_question.json file in the same folder.
Example structure of the file:

json
Copy code
[
  {
    "title": "What does HTML stand for?",
    "answer_1": "Hyper Text Markup Language",
    "answer_2": "Home Tool Markup Language",
    "answer_3": "Hyperlinks and Text Markup Language",
    "answer_4": "High Transfer Machine Language",
    "right_answer": "Hyper Text Markup Language"
  }
]
▶️ 3. Run the App
Just open index.html in your browser — no server setup needed!
The quiz will start automatically.
---

🔮 Future Improvements

Here are some features you could add in the future:

✅ Support multiple categories (HTML, CSS, JS, etc.)

✅ Randomize question order

✅ Store high scores using LocalStorage

✅ Show correct answer after each question

✅ Add sound effects for correct/wrong answers

✅ Add a “Start Quiz” landing page

---

👩‍💻 Credits
Developed by Yasmine Hosnie 💙
