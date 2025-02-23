const heroes = [
    { name: "Goku", powerLevel: 1000,image: "images/heroes/goku.webp" },
    { name: "Vegeta", powerLevel: 995 },
    { name: "Gohan", powerLevel: 980,  },
    /*{ name: "Piccolo", powerLevel: 950,  },
    { name: "Krillin", powerLevel: 750,  },
    { name: "Bulma", powerLevel: 150,  },
    { name: "Trunks",  powerLevel: 970 },
    { name: "Goten",  powerLevel: 960 },
    { name: "Master Roshi",  powerLevel: 500 },
    { name: "Yamcha", powerLevel: 600 },
    { name: "Tien Shinhan",powerLevel: null },
    { name: "Chiaotzu", powerLevel: 700 },
    { name: "Android 18", powerLevel: 900 },
    { name: "Videl", powerLevel: 300 },
    { name: "Mr. Satan (Hercule)", powerLevel:100 },
    { name: "Pan", powerLevel: 500 },
    { name: "Uub", powerLevel: 850 },
    { name: "Android 17",  powerLevel: 900 },
    { name: "Majin Buu", powerLevel: 940 },
    { name: "Supreme Kai", powerLevel: 800 },
    { name: "Kibito", powerLevel: 750,  },
    { name: "Old Kai", powerLevel: 200,  },
    { name: "Dende", powerLevel: 100,  },
    { name: "Kami", powerLevel: 500,  },
    { name: "Korin", powerLevel: 200,  },
    { name: "Yajirobe", powerLevel: 300,  },
    { name: "Puar", powerLevel: 50,  },
    { name: "Oolong", powerLevel: 50,  },
    { name: "Launch", powerLevel: 150,  },
    { name: "Chi-Chi", powerLevel: 130,  },
    { name: "Ox-King", powerLevel: 200,  },
    { name: "Bardock", powerLevel: 800,  },
    { name: "King Kai", powerLevel: 600,  },
    { name: "Grand Kai", powerLevel: 700,  },
    { name: "Pikkon", powerLevel: 850,  },
    { name: "Jaco", powerLevel: 400,  },
    { name: "Marron", powerLevel: 30,  },
    { name: "Gine", powerLevel: 300,  },
    { name: "Tarble", powerLevel: 600,  },
    { name: "Whis", powerLevel: 990,  },
    { name: "Beerus", powerLevel: 985,  },
    { name: "Champa", powerLevel: 980,  },
    { name: "Vados", powerLevel: 985,  },
    { name: "Cabba", powerLevel: 800,  },
    { name: "Caulifla", powerLevel: 850,  },
    { name: "Kale", powerLevel: 870, },
    { name: "Hit", powerLevel: 950,  },
    { name: "Toppo", powerLevel: 930,  },
    { name: "Dyspo", powerLevel: 900,  },
    { name: "Merus", powerLevel: 970,  },
    { name: "Granolah", powerLevel: 960,  },
    { name: "Oob", powerLevel: 850,  },
    { name: "Nail", powerLevel: 400,  },
    { name: "Guru", powerLevel: 200,  },
    { name: "Tapion", powerLevel: 700,  },
    { name: "Goku Jr.", powerLevel: 600,  },
    { name: "Vegeta Jr.", powerLevel: 600,  },
    { name: "Android 16", powerLevel: 850,  },
    { name: "Fortuneteller Baba", powerLevel: 200,  },
    { name: "Mr. Popo", powerLevel: 300, },
    { name: "Zeno", powerLevel: 1000,  },
    { name: "Grand Priest", powerLevel: 995,  },
    { name: "Gogeta", powerLevel: 1000,  },
    { name: "Vegito", powerLevel: 1000,  },
    { name: "Gotenks", powerLevel: 940,  },
    { name: "Kefla", powerLevel: 960,  },
    { name: "Shin", powerLevel: 780,  }*/
];

const villains = [
    { name: "Pilaf", powerLevel: 50,image: "images/vilans/Pila.png"  },
    { name: "Shu", powerLevel: 40,  },
    { name: "Mai", powerLevel: 60,  },
    /*{ name: "Red Ribbon Army", powerLevel: 200,  },
    { name: "Commander Red", powerLevel: 100,  },
    { name: "Adjunct Black", powerLevel: 150,  },
    { name: "Colonel Silver", powerLevel: 180,  },
    { name: "Sergeant Murasaki", powerLevel: 160,  },
    { name: "General White", powerLevel: 170,  },
    { name: "General Blue", powerLevel: 190,  },
    { name: "Tao Pai Pai", powerLevel: 350,  },
    { name: "Tenshinhan", powerLevel: 400,  },
    { name: "Chaozu", powerLevel: 300,  },
    { name: "Crane Hermit", powerLevel: 300,  },
    { name: "King Piccolo", powerLevel: 700,  },
    { name: "Tambourine", powerLevel: 400,  },
    { name: "Cymbal", powerLevel: 350,  },
    { name: "Drum", powerLevel: 450,  },
    { name: "Piano", powerLevel: 300,  },
    { name: "Piccolo Jr.", powerLevel: 700,  },
    { name: "Raditz", powerLevel: 600,  },
    { name: "Nappa", powerLevel: 700,  },
    { name: "Vegeta", powerLevel: 800,  },
    { name: "Frieza", powerLevel: 950,  },
    { name: "Cui", powerLevel: 500,  },
    { name: "Zarbon", powerLevel: 600,  },
    { name: "Dodoria", powerLevel: 550,  },
    { name: "Ginyu Force", powerLevel: 700,  },
    { name: "Captain Ginyu", powerLevel: 750,  },
    { name: "Burter", powerLevel: 650,  },
    { name: "Jeice", powerLevel: 640,  },
    { name: "Recoome", powerLevel: 660,  },
    { name: "Guldo", powerLevel: 530,  },
    { name: "Garlic Jr.", powerLevel: 600,  },
    { name: "Dr. Gero", powerLevel: 700,  },
    { name: "Android 19", powerLevel: 750,  },
    { name: "Android 16", powerLevel: 740,  },
    { name: "Android 17", powerLevel: 760,  },
    { name: "Android 18", powerLevel: 800,  },
    { name: "Cell", powerLevel: 970,  },
    { name: "Spopovich", powerLevel: 300,  },
    { name: "Yamu", powerLevel: 320,  },
    { name: "Pui Pui", powerLevel: 500,  },
    { name: "Yakon", powerLevel: 550,  },
    { name: "Dabura", powerLevel: 800,  },
    { name: "Babidi", powerLevel: 200,  },
    { name: "Majin Buu", powerLevel: 850,  },
    { name: "Super Buu", powerLevel: 960,  },
    { name: "Kid Buu", powerLevel: 950,  },
    { name: "Beerus", powerLevel: 990,  },
    { name: "Whis", powerLevel: 995,  },
    { name: "Champa", powerLevel: 985,  },
    { name: "Vados", powerLevel: 990,  },
    { name: "Frost", powerLevel: 800,  },
    { name: "Magetta", powerLevel: 750,  },
    { name: "Hit", powerLevel: 950,  },
    { name: "Goku Black", powerLevel: 980,  },
    { name: "Zamasu", powerLevel: 940,  },
    { name: "Fused Zamasu", powerLevel: 990,  },
    { name: "Jiren", powerLevel: 990,  },
    { name: "Toppo", powerLevel: 750,  },
    { name: "Kale", powerLevel: 850,  },
    { name: "Caulifla", powerLevel: 840,  },
    { name: "Kefla", powerLevel: 920,  },
    { name: "Broly", powerLevel: 980,  },
    { name: "Paragus", powerLevel: 400,  },
    { name: "Moro", powerLevel: 970,  },
    { name: "Saganbo", powerLevel: 700,  },
    { name: "OG73-1", powerLevel: 850,  },
    { name: "Granolah", powerLevel: 850,  },
    { name: "Gas", powerLevel: 950,  },
    { name: "Elec", powerLevel: 600,  },
    { name: "Macki", powerLevel: 550,  },
    { name: "Oil", powerLevel: 500,  }*/
];

const grounds = [
    { name: "Earth", image: null },
   /* { name: "Namek", image: null },
    { name: "Planet Vegeta", image: null },
    { name: "Other World", image: null },
    { name: "King Kai's Planet", image: null },
    { name: "Supreme Kai's World", image: null },
    { name: "Hell", image: null },
    { name: "Hyperbolic Time Chamber", image: null },
    { name: "Kami's Lookout", image: null },
    { name: "Kame House", image: null },
    { name: "Papaya Island", image: null },
    { name: "World Martial Arts Tournament Arena", image: null },
    { name: "Cell Games Arena", image: null },
    { name: "Beerus' Planet", image: null },
    { name: "Universe 6 Tournament Arena", image: null },
    { name: "Tournament of Power Arena", image: null },
    { name: "Planet Yardrat", image: null },
    { name: "Planet Vampa", image: null },
    { name: "New Planet Namek", image: null },
    { name: "Fake Namek", image: null },
    { name: "Planet Frieza 79", image: null },
    { name: "Planet Meat", image: null },
    { name: "Planet Kanassa", image: null },
    { name: "Planet Cereal", image: null },
    { name: "Planet Zoon", image: null },
    { name: "Planet Zun", image: null },
    { name: "Planet Imecka", image: null },
    { name: "Planet M-2", image: null },
    { name: "Planet Luud", image: null },
    { name: "Demon Realm", image: null },
    { name: "Babidi's Spaceship", image: null },
    { name: "Korin Tower", image: null },
    { name: "Muscle Tower", image: null },
    { name: "Penguin Village", image: null },
    { name: "Mount Paozu", image: null },
    { name: "Fire Mountain", image: null },
    { name: "Yunzabit Heights", image: null },
    { name: "Gizard Wasteland", image: null },
    { name: "Diablo Desert", image: null },
    { name: "Break Wasteland", image: null },
    { name: "Rocky Area", image: null },
    { name: "Islands", image: null },
    { name: "Archipelago", image: null },
    { name: "Sacred World of the Kai", image: null },
    { name: "Grand Kai's Planet", image: null },
    { name: "Planet of the Kais", image: null },
    { name: "Zeno's Palace", image: null },
    { name: "Whis' Castle", image: null },
    { name: "Capsule Corporation", image: null },
    { name: "Red Ribbon Army Headquarters", image: null },
    { name: "Dr. Gero's Laboratory", image: null },
    { name: "Baba's Palace", image: null },
    { name: "Otherworld Tournament Arena", image: null },
    { name: "Snake Way", image: null }*/
];

function rand (array) {
    let i = Math.floor(Math.random() * array.length)
    return  array[i]
}

function batleOutcome (heroes,villains){ 
    //calculates the total power 
    const totalPower = heroes.powerLevel + villains.powerLevel ;

    const probA = heroes.powerLevel / totalPower;


    const randNum = Math.random();

    if (randNum < probA) {
        return heroes;
    } else {
        return villains;
    }


}

function setUp(){
    let heroe = 
        rand(heroes);
    
    let vilan =
        rand(villains);
    
    let place =
        rand (grounds);

    let winner = batleOutcome(heroe,vilan);
    
    /*console.log(`In Today's fight our Hero ${heroe} will face the mighty ${vilan} and the figth is taking place on ${place}`)*/
    document.getElementById('result').innerHTML = `In Today's fight our Hero <strong>${heroe.name}--Power level : ${heroe.powerLevel} </strong>will face the mighty <strong>${vilan.name}--Power level : ${vilan.powerLevel}</strong> and the fight is taking place on <italic>${place.name}</strong>,and the winner is <strong>,${winner.name}</strong> <img src= "${winner.image}" alt="winner" width="150" height="150">`;
}




   
