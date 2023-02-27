//QUESTION 1
//CONSTRUCTOR FUNCTION

function InstagramPost(handle, content, image, views, likes) {
    this.handle = handle,
        this.content = content,
        this.image = image,
        this.views = views,
        this.likes = likes
}

//QUESTION 2
//INSTAGRAM POST OBJECTS

const InstagramPost1 = new InstagramPost('Sanct1fied1', 'Personality', 'www.instagram.com/sanct1fied1', 100, 20)
const InstagramPost2 = new InstagramPost('Casting Crowns', 'Music', 'www.instagram.com/castingcrowns/', 3000, 2000)
console.log(InstagramPost1);
console.log(InstagramPost2);


//QUESTION 3 - FACTORY METHOD
//a. createPerson() factory function

function createPerson(name, age, location) {
    return {
        Name: name,
        Age: age,
        Location: location
    }
}

//Object representing Musa from the Factory method

const person = createPerson('Musa Dawodu', 19, 'Lekki - Lagos State');
console.log(person);

// b. createJambScores() factory function

function createJambScores(eng, govt, lit, crk) {
    return {
        ENG: eng,
        GOVT: govt,
        LIT: lit,
        CRK: crk
    }
}

//Object representing Mussa's JAMB scores

const scores = createJambScores(70, 85, 82, 94);
console.log(scores);

// Object added to Musa object

function createPerson(name, age, location, scores) {
    return {
        Name: name,
        Age: age,
        Location: location,
        JambScores: scores
    }
}

const person1 = createPerson('Musa Dawodu', 19, 'Lekki - Lagos State', scores);
console.log(person1);

//QUESTION 4 - CLONING AN OBJECT
//There are 4 ways of cloning an object;

//Option 1 using object.assign()

const firstbook = {
    Author: 'Tina',
    Title: 'Spirit man',
    YearPublished: 2019
}
console.log(firstbook);

const secondbook = firstbook;
secondbook.Title = 'Jesus';
secondbook.YearPublished = 2020;
console.log(secondbook);

//Option 2 using spread operator i.e ...

const thirdbook = { ...firstbook };
thirdbook.Author = 'Tina et al.';
thirdbook.Title = 'Divine Healing';
thirdbook.YearPublished = 2021;
console.log(thirdbook);

//Option 3 using JSON.parse()

const fourthbook = JSON.parse(JSON.stringify(firstbook));
fourthbook.Author = 'Tina & Bob';
fourthbook.Title = 'Our Helper';
fourthbook.YearPublished = 2022;
console.log(fourthbook);

//Option 4 using the structuredClone() function

const fifthbook = structuredClone(firstbook);
fifthbook.Author = 'Tina';
fifthbook.Title = 'Walking with God';
fifthbook.YearPublished = 2023;
console.log(fifthbook);

//QUESTION 5 - ENUMERATION METHODS

const presidentialCandidates = {
    'AAC': 'Omoyele Sowere',
    'ACCORD': 'Christopher Imumolen',
    'APC': 'Bola Ahmed Tinubu',
    'LP': 'Peter Obi',
    'NNPP': 'Rabiu Kwankwaso',
    'PDP': 'Atiku Abubakar',
};

for (var key in presidentialCandidates) {
    if (presidentialCandidates.hasOwnProperty(key)) {
        console.log(presidentialCandidates[key] + ' is the Presidential Candidate of ' + key);
    }
}


