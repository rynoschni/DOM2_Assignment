const lightButton = document.getElementById('lightClick');
const darkButton = document.getElementById('darkClick');
const divContainer = document.getElementById('container');
const divStart = document.getElementById('start');

const p1Text_light = "Welcome youngling!  I am Jedi Master Zelrac Zil of the DigitalCrafts Jedi Council.  You have now achieved the rank of IMM-July Padawan learner.  Your instructor is Jedi Master Ron Sheid.";

const p2Text_light = "Master Sheid is well versed in all the teachings of the DigitalCrafts Jedi Code and a master of force power, Ranger Knowledge!  While he has a flair for the dramatic, even strange at times, you would be wise to listen to his teachings, typically said in threes.";

const p3Text_light = "Due to recent events with the evil Sith Lord Darth Snake Jodgel, a master of the dark side of Slack gif Force, occationally, Master Sheid will be on assignment tacking and battling the evil sith lord.  In these instances, you will hone your key lightsaber and responsive skills with Jedi Knight Cave Dolon, a master of the dual key lightsaber and Force skill Flexbox.";

const p4Text_light = "May the Slack gif Force be with you!"

const p1Text_dark = "Greetings underling!  I am Sith Lord, Darth Snake Jodgel.  You have now achieved the rank of Acolyte and will become my apprentice.";

const p2Text_dark = "As my apprentice, I will train you to use the dark side of the Slack gifs Force and how to master your weapon, the double LISTsaber, to gain ultimate power!  Beware of the Jedi, especially Jedi Master Yelrac Zil.  She is a crafty one and can use the force to teleport and attack you from behind.  Master Ron Sheid is well versed in all the teachings of the DigitalCrafts Jedi Code and is a master of the force power, Ranger Knowledge.";

const p3Text_dark = "Stay focused and master these abilities.  For when you face the IMM-July Padawans', all your skill will be needed as their teaching has being enhanced by Jedi Knight Cave Dolon, skilled in the use of the dual key lightsaber and power, Force Flexbox!";

const p4Text_dark = "May the Slack gif Force serve you well!"

const darkList = document.getElementById('dark-list');
const body = document.getElementById('body');

//Light side button Event

lightButton.addEventListener('click', function (event){ 
  event.preventDefault();

  divStart.classList.add("hide");
  const lightDiv = document.createElement("div");
  lightDiv.setAttribute('id','lightSide');
  lightDiv.classList.add("lightside");
  divContainer.appendChild(lightDiv);
  //setup light div for additional elements

  const lightH1 = document.createElement('h1');
  lightH1.classList.add('h1-light');
  lightH1.innerHTML = "WELCOME TO THE LIGHT SIDE!";
  lightDiv.appendChild(lightH1);

  const lightH2 = document.createElement('h2');
  lightH2.classList.add('h2-light');
  lightH2.innerHTML = "DigitalCrafts Padawan Training Class";
  lightDiv.appendChild(lightH2);

  const lightP1 = document.createElement('p');
  lightP1.classList.add('p-light');
  lightP1.innerHTML = p1Text_light;
  lightDiv.appendChild(lightP1);

  const lightP2 = document.createElement('p');
  lightP2.classList.add('p-light');
  lightP2.innerHTML = p2Text_light;
  lightDiv.appendChild(lightP2);

  const lightUL = document.createElement('ul');
  lightUL.setAttribute('id', 'light-list')
  lightUL.classList.add('ul-light');
  lightUL.innerHTML = "Your training will include";
  lightDiv.appendChild(lightUL);
  const lightList = document.getElementById('light-list');

  const lightLi_1 = document.createElement('li');
  lightLi_1.classList.add('li-light');
  lightLi_1.innerHTML = "Front-end peace";
  lightList.appendChild(lightLi_1);

  const lightLi_2 = document.createElement('li');
  lightLi_2.classList.add('li-light');
  lightLi_2.innerHTML = "Back-end aggressive negotiations";
  lightList.appendChild(lightLi_2);

  const lightLi_3 = document.createElement('li');
  lightLi_3.classList.add('li-light');
  lightLi_3.innerHTML = "Interview Force Mastery";
  lightList.appendChild(lightLi_3);

  const lightP3 = document.createElement('p');
  lightP3.classList.add('h2-light');
  lightP3.innerHTML = p3Text_light;
  lightDiv.appendChild(lightP3);

  const lightP4 = document.createElement('h2');
  lightP4.classList.add('h2-light');
  lightP4.innerHTML = p4Text_light;
  lightDiv.appendChild(lightP4);

  const lightReturn = document.createElement("button");
  lightReturn.setAttribute('id','lightReturn');
  lightReturn.classList.add("buttonDark");
  lightReturn.innerHTML = 'Give in to the Dark';
  divContainer.appendChild(lightReturn);

  lightReturn.addEventListener('click', function(event){
    event.preventDefault();
    location.reload();
  })

});

//Darkside Button Event

darkButton.addEventListener('click', function (event){
  event.preventDefault();

  divStart.classList.add("hide");
  body.classList.add("darkBody");
  const darkDiv = document.createElement("div");
  darkDiv.setAttribute('id','darkSide');
  darkDiv.classList.add("darkside");
  divContainer.appendChild(darkDiv);
  //setup dark div for additional elements
  const divdark = document.getElementById('darkSide');

  const darkH1 = document.createElement('h1');
  darkH1.classList.add('h1-dark');
  darkH1.innerHTML = "WELCOME TO THE DARK SIDE!";
  darkDiv.appendChild(darkH1);

  const darkH2 = document.createElement('h2');
  darkH2.classList.add('h2-dark');
  darkH2.innerHTML = "Git Acolytes Training Class";
  darkDiv.appendChild(darkH2);

  const darkP1 = document.createElement('p');
  darkP1.classList.add('p-dark');
  darkP1.innerHTML = p1Text_dark;
  darkDiv.appendChild(darkP1);

  const darkP2 = document.createElement('p');
  darkP2.classList.add('p-dark');
  darkP2.innerHTML = p2Text_dark;
  darkDiv.appendChild(darkP2);

  const darkUL = document.createElement('ul');
  darkUL.setAttribute('id', 'dark-list')
  darkUL.classList.add('ul-dark');
  darkUL.innerHTML = "Your training will include";
  darkDiv.appendChild(darkUL);
  const darkList = document.getElementById('dark-list');

  const darkLi_1 = document.createElement('li');
  darkLi_1.classList.add('li-dark');
  darkLi_1.innerHTML = "Nemesis Spelling";
  darkList.appendChild(darkLi_1);

  const darkLi_2 = document.createElement('li');
  darkLi_2.classList.add('li-dark');
  darkLi_2.innerHTML = "Missed Separators bugs";
  darkList.appendChild(darkLi_2);

  const darkLi_3 = document.createElement('li');
  darkLi_3.classList.add('li-dark');
  darkLi_3.innerHTML = "Git confusion on all fronts";
  darkList.appendChild(darkLi_3);

  const darkP3 = document.createElement('p');
  darkP3.classList.add('p-dark');
  darkP3.innerHTML = p3Text_dark;
  darkDiv.appendChild(darkP3);

  const darkP4 = document.createElement('h2');
  darkP4.classList.add('h2-dark');
  darkP4.innerHTML = p4Text_dark;
  darkDiv.appendChild(darkP4);

  const darkReturn = document.createElement("button");
  darkReturn.setAttribute('id','darkReturn');
  darkReturn.classList.add("buttonLight");
  darkReturn.innerHTML = 'Return to the Light';
  divContainer.appendChild(darkReturn);

  darkReturn.addEventListener('click', function(event){
    event.preventDefault();
    location.reload();
  })
});

