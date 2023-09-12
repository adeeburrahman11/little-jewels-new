# LITTLE JEWELS

## After cloning follow the commands:
1. npm install
2. npm run dev

## While creating any PR follow the guidelines:
- Fork the Repo
- Always sync the repo before doing any contributions or pushing any contributions.
- Create another branch while pushing the changes.
- Wait for PR to get merged.
- Only push the components and don't make changes in the "app.js" file.
- Those whoever create the first component make sure to create the component in the component directory only.

## Basic Commits Command:
- git add .
- git commit -m""
- git push -u origin
  
## Should focus on the File Structure 
- add each page to the pages directory eg : home, about, gallery, etc.
- add each reusable component like navbar, footer and all those components we will use in most of the pages.
- include all other specific components to the parental page component into the pages/parent directory.
- all the public assests like images, logos should be in the public directory with their respective directories.
- leave app.css and index.css for me to work with.
- This will allow us to create a project that can be understandable to others and also benificial for routing too.

## Here is the exact file structure

└── src/
    ├── components/
    │   ├── navbar.jsx
    │   ├── footer.jsx
    │   ├── comp3
    │   └── comp4
    └── pages/
        ├── home/
           ├── home.jsx
           ├── hero.jsx 
        ├── about/*
        ├── gallery/*
        ├── academics/
           ├── index.js
           ├── academics.css
           ├── academics.jsx 
        ├── page5/*
        └── page6/*
