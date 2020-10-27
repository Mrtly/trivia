## 📙 trivia game  

## ✨ [play here](https://vue-trivia.vercel.app/) ✨

You can [play the game online](https://vue-trivia.vercel.app/) (recommended), or clone this repo to your machine to play locally ([jump to set-up instructions](###-local-project-setup)).

• • • • • •

## 📒 the challenge 
The goal was to create an application that displays trivia questions with multiple-choice answers to select from.
The questions & answers were provided in json format.

**intended MVP:**
the player can view the question(s), the answer choices, the correct answer upon submission, and their score. 

• • • • • •
#### 💚 why Vue? 
because Vue is awesome! 💚 <br>it also makes the game state handling smooth and reliable <br> & I love the practice!

• • • • • •
### ✅ acceptance criteria

- [x] A round of trivia has 10 questions
- [x] All questions are multiple-choice questions
- [x] The score does not need to update in real time  (ok but it does:))
- [x] Results can update on form submit, button click, or any interaction
- [x] A user can view questions
- [x] Questions with their multiple choice options must be displayed one at a time
- [x] Questions should not repeat in a round
- [x] A user can select only 1 answer out of the 4 possible answers
- [x] The correct answer must be revealed after a user has submitted their answer
- [x] A user can see the score they received at the end of the round

• • • • • •

### 🔜 next steps / additional features

* unit testing with Jest or Vue testing library 🆒
* router view fade in/out transitions
* highlight/colorize answers instead of text feedback 🆒
* an animation to celebrate the correct answer
* animation at game over stage
* offer option to play 10 or 20 randomly selected questions 
* make prettier looks overall! 

• • • • • •

### local project setup  

#### 💻 Clone repo & install dependencies
*in your terminal:*
```
git clone git@github.com:Mrtly/trivia.git
```
*you may open the project folder in your editor and then open the console inside, or navigate to the project folder in your current terminal window, then:*

```
npm install
```

#### Compile and hot-reload for development
```
npm run serve
```

*& open the link provided in the terminal!*

game on! 😉
