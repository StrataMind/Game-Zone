# Contributing to GameZone PRO

## How to Contribute

### 1. Fork & Clone
```bash
git clone https://github.com/YOUR_USERNAME/Game-Zone.git
cd Game-Zone
```

### 2. Create Game Folder
- Create folder in `Games/` directory
- Use naming convention: `Your_Game_Name`
- Include: `index.html`, `style.css`, `script.js`

### 3. Add Game Files
```
Games/Your_Game_Name/
├── index.html
├── style.css  
├── script.js
└── README.md
```

### 4. Game README Template
```markdown
# Game Name

## Description
Brief description of your game

## How to Play
- Step 1
- Step 2

## Screenshots
![Game Screenshot](screenshot.png)

## Technologies Used
- HTML5
- CSS3
- JavaScript
```

### 5. Add Game Image
- Add game screenshot to `Images/` folder
- Name: `your_game_name.png`
- Size: 400x300px recommended

### 6. Update Main README
Add your game to the games list in main README.md

### 7. Submit PR
```bash
git checkout -b add-your-game
git add .
git commit -m "Add Your Game Name"
git push origin add-your-game
```

## Guidelines
- Ensure game works on mobile
- Use clean, readable code
- No inappropriate content
- Test thoroughly before submitting