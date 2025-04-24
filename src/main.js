const root = document.getElementByID('root');


//----------------Page Content------------------------------------------------------

const title = document.createElement('div');
title.innerText = 'UNLEASH THE INNER BEAST';
title.className = "title-text";
root.appendChild(title);

const content = document.createElement('div');
content.className = "page-content";
content.innerText = `Welcome to the world of unstoppable energy.
Monster Energy isn’t just a drink—it’s a lifestyle. Made for those who never back down, who live fast and push harder. Whether you’re grinding at the gym, racing through the streets, or just chasing the next thrill, Monster fuels your fire.
What’s Inside the Can?

    A powerful blend of caffeine, taurine, and B-vitamins

    Explosive flavor that hits like a storm

    Zero compromises, full throttle energy

Why Monster?

✅ Intense, long-lasting boost
✅ Sleek, iconic design
✅ Trusted by athletes, gamers, and creators worldwide
Join the Movement

This isn’t just a drink—it’s the fuel of champions.
Are you ready to unleash your inner beast?

Grab a Monster. Feel the power. Own the moment.`; 
//--------------CANVAS for implementation of the 3D text effect----------------------
const canvas = document.createElement('canvas');
canvas.id = 'monster-canvas';
root.appendChild(canvas);

//--------------------------FUNCS----------------------------------------------

