# Tech Quiz Portal & Automation Suite

A full-stack style **Skill Assessment Platform** built entirely with **Vanilla JavaScript** (No Backend) and validated using a robust **Selenium Automation Framework**.

**Live Demo:** [Click Here to View App](https://tech-quiz-portal.netlify.app/)

---

## Project Overview
This project demonstrates a "Hybrid" skill set: **Frontend Development** and **Test Automation**.
It simulates a real-world examination portal where users can take quizzes on Java, Python, or GK, while "Admins" (Teachers) can view results. The entire state is managed client-side using `localStorage`, making it persistent without a database.

###  Key Features
* **Role-Based Access:** Separate flows for **Students** and **Teachers**.
* **Smart State Management:** Uses `localStorage` to simulate a database (Signups, Login, Results).
* **Dynamic Quiz Engine:** Randomizes questions based on Category (Java/Python) and Difficulty.
* **Security:** Route protection (redirects unauthorized users to Login).
* **Responsive UI:** Fully optimized for Mobile and Desktop.

---

## Automation & Testing Strategy
This repository includes a production-grade **Selenium WebDriver (Java)** automation suite located in `/src`.

| Feature | Description |
| :--- | :--- |
| **Framework** | Selenium WebDriver + Java |
| **Design Pattern** | Page Object Model (POM) |
| **Reporting** | Console Logs + Screenshots on Failure |
| **Coverage** | Login, Quiz Flow, Score Validation, Negative Testing |

### **Test Scenarios Covered:**
1.  **Positive Flow:** Valid Login -> Take Quiz -> Verify Score in Dashboard.
2.  **Negative Flow:** Invalid Credentials -> Verify Error Message.
3.  **Edge Cases:** Skipping questions, Session timeout, unauthorized URL access.

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Automation:** Java, Selenium WebDriver, JUnit/TestNG
* **Build Tool:** Maven
* **Deployment:** Netlify / Vercel

---

## How to Run the Automation
1.  Clone the repository:
    ```bash
    git clone [https://github.com/](https://github.com/)[YOUR-USERNAME]/tech-quiz-portal.git
    ```
2.  Open the project in **IntelliJ IDEA** or **Eclipse**.
3.  Navigate to `src/test/java/QuizAutomation.java`.
4.  Run the file as a Java Application.
    * *The script will launch Chrome, run the test cases, and save screenshots to the `/screenshots` folder.*

---

## Contact
**[Your Name]**
* **Portfolio:** [https://tumpillipavankumar.wixsite.com/tumpilli-pavan/certifications]
* **LinkedIn:** [https://www.linkedin.com/in/tumpilli-pavan-48581824b/]
