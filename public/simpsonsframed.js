//Array for loading images
defaultImageArray = [
    's1e01', 's1e02', 's1e03', 's1e04', 's1e05', 's1e06', 's1e07', 's1e08', 's1e09', 's1e10',
    's1e11', 's1e12', 's1e13',
    's2e01', 's2e02', 's2e03', 's2e04', 's2e05', 's2e06', 's2e07', 's2e08', 's2e09', 's2e10',
    's2e11', 's2e12', 's2e13', 's2e14', 's2e15', 's2e16', 's2e17', 's2e18', 's2e19', 's2e20',
    's2e21', 's2e22',
    's3e01', 's3e02', 's3e03', 's3e04', 's3e05', 's3e06', 's3e07', 's3e08', 's3e09', 's3e10',
    's3e11', 's3e12', 's3e13', 's3e14', 's3e15', 's3e16', 's3e17', 's3e18', 's3e19', 's3e20',
    's3e21', 's3e22', 's3e23', 's3e24'
]
//Function for loading random images
function loadRandomImage() {
    defaultImageRandomIndex = Math.floor(Math.random() * defaultImageArray.length);
    defaultImage = defaultImageArray[defaultImageRandomIndex];
    document.getElementById('imageShower').src = `./images/imageguess/${defaultImage}.jpg`;
}
guessResult.innerHTML = 'Guess the Episode'

// Array for populating drop down menus
var myData = [
    ['Season 1', 'Episode 01 - Simpsons Roasting on an Open Fire'],
    ['Season 1', 'Episode 02 - Bart the Genius'],
    ['Season 1', 'Episode 03 - Homer\'s Odyssey'],
    ['Season 1', 'Episode 04 - There\'s No Disgrace Like Home'],
    ['Season 1', 'Episode 05 - Bart the General'],
    ['Season 1', 'Episode 06 - Moaning Lisa'],
    ['Season 1', 'Episode 07 - The Call of the Simpsons'],
    ['Season 1', 'Episode 08 - The Telltale Head'],
    ['Season 1', 'Episode 09 - Life on the Fast Lane'],
    ['Season 1', 'Episode 10 - Homer\'s Night Out'],
    ['Season 1', 'Episode 11 - The Crepes of Wrath'],
    ['Season 1', 'Episode 12 - Krusty Gets Busted'],
    ['Season 1', 'Episode 13 - Some Enchanted Evening'],
    ['Season 2', 'Episode 01 - Bart Gets an \"F\"'],
    ['Season 2', 'Episode 02 - Simpson and Delilah'],
    ['Season 2', 'Episode 03 - Treehouse of Horror'],
    ['Season 2', 'Episode 04 - Two Cars in Every Garage and Three Eyes on Every Fish'],
    ['Season 2', 'Episode 05 - Dancin\' Homer'],
    ['Season 2', 'Episode 06 - Dead Putting Society'],
    ['Season 2', 'Episode 07 - Bart vs. Thanksgiving'],
    ['Season 2', 'Episode 08 - Bart the Daredevil'],
    ['Season 2', 'Episode 09 - Itchy & Scratchy & Marge'],
    ['Season 2', 'Episode 10 - Bart Gets Hit by a Car'],
    ['Season 2', 'Episode 11 - One Fish, Two Fish, Blowfish, Blue Fish'],
    ['Season 2', 'Episode 12 - The Way We Was'],
    ['Season 2', 'Episode 13 - Homer vs. Lisa and the 8th Commandment'],
    ['Season 2', 'Episode 14 - Principal Charming'],
    ['Season 2', 'Episode 15 - Oh Brother, Where Art Thou?'],
    ['Season 2', 'Episode 16 - Bart\'s Dog Gets an \"F\"'],
    ['Season 2', 'Episode 17 - Old Money'],
    ['Season 2', 'Episode 18 - Brush with Greatness'],
    ['Season 2', 'Episode 19 - Lisa\'s Substitute'],
    ['Season 2', 'Episode 20 - The War of the Simpsons'],
    ['Season 2', 'Episode 21 - Three Men and a Comic Book'],
    ['Season 2', 'Episode 22 - Blood Feud'],
    ['Season 3', 'Episode 01 - Stark Raving Dad'],
    ['Season 3', 'Episode 02 - Mr. Lisa Goes to Washington'],
    ['Season 3', 'Episode 03 - When Flanders Failed'],
    ['Season 3', 'Episode 04 - Bart the Murderer'],
    ['Season 3', 'Episode 05 - Homer Defined'],
    ['Season 3', 'Episode 06 - Like Father, Like Clown'],
    ['Season 3', 'Episode 07 - Treehouse of Horror II'],
    ['Season 3', 'Episode 08 - Lisa\'s Pony'],
    ['Season 3', 'Episode 09 - Saturdays of Thunder'],
    ['Season 3', 'Episode 10 - Flaming Moe\'s'],
    ['Season 3', 'Episode 11 - Burns Verkaufen der Kraftwerk'],
    ['Season 3', 'Episode 12 - I Married Marge'],
    ['Season 3', 'Episode 13 - Radio Bart'],
    ['Season 3', 'Episode 14 - Lisa the Greek'],
    ['Season 3', 'Episode 15 - Homer Alone'],
    ['Season 3', 'Episode 16 - Bart the Lover'],
    ['Season 3', 'Episode 17 - Homer at the Bat'],
    ['Season 3', 'Episode 18 - Separate Vocations'],
    ['Season 3', 'Episode 19 - Dog of Death'],
    ['Season 3', 'Episode 20 - Colonel Homer'],
    ['Season 3', 'Episode 21 - Black Widower'],
    ['Season 3', 'Episode 22 - The Otto Show'],
    ['Season 3', 'Episode 23 - Bart\'s Friend Falls in Love'],
    ['Season 3', 'Episode 24 - Brother, Can you Spare Two Dimes?']
]

function makeDropDown(data, level1Filter) {
    var filteredArray = data.filter(r => r[0] === level1Filter);

    var uniqueList = getUniqueValues(filteredArray, 1);

    var selectLevel2 = document.getElementById('level2');

    populateDropDown(selectLevel2, uniqueList)
}
function applyDropDown() {
    var selectLevel1Value = document.getElementById('level1').value;
    makeDropDown(myData, selectLevel1Value);
}
function afterDocumentLoads() {
    populateFirstLevelDropDown();
    applyDropDown();
    loadRandomImage();
    revealAnswer.innerHTML = '';
    document.getElementById('try1').src = 'donut.png'
    document.getElementById('try2').src = 'donut.png'
    document.getElementById('try3').src = 'donut.png'
    tryNumber = 1;
}
function getUniqueValues(data, index) {
    var uniqueOptions = new Set();
    data.forEach(r => uniqueOptions.add(r[index]))
    return [...uniqueOptions]
}
function populateFirstLevelDropDown() {
    var uniqueList = getUniqueValues(myData, 0);
    el = document.getElementById('level1');
    populateDropDown(el, uniqueList)
}
function populateDropDown(el, listAsArray) {
    el.innerHTML = '';

    listAsArray.forEach(item => {
        var option = document.createElement('option');
        option.textContent = item;
        el.appendChild(option)
    })
}
function checkGuess() {
    //Converts drop down select values to match format of image names (e.g. s1e01 for Season 1,
    //Episode 1)
    var seasonNumber = document.getElementById('level1').value;
    var episodeNumber = document.getElementById('level2').value;
    var stringLength = seasonNumber.length;
    var episodeId =
        seasonNumber[0] + seasonNumber[stringLength - 1] +
        episodeNumber[0] + episodeNumber[8] + episodeNumber[9];
    var guessSelect = episodeId.toLowerCase();
    //Changes header text based on whether the guess was correct or not. Also prompts
    //user to make a selection when default text is shown (still need to add default
    //text to dropdowns). Also adds 1 to the number of tries. Header displays 'D'oh! YOU LOSE' after
    //3 tries, reveals the answer, and changes the image to Homer screaming. Donut images change to donuts with bites taken out 
    //after every incorrect guess.
    if (guessSelect === defaultImage) {
        guessResult.innerHTML = 'Excellent!';
    } else if (guessSelect !== defaultImage && seasonNumber + episodeNumber !== 'Select a SeasonSelect an Episode' && tryNumber !== 3) {
        guessResult.innerHTML = 'Try Again!';
        tryNumber = tryNumber + 1;
        document.getElementById(`try${tryNumber - 1}`).src = 'donut2.png';
        loadAnotherFrame();
    } else if (seasonNumber + episodeNumber === 'Select a SeasonSelect an Episode') {
        guessResult.innerHTML = 'Please Select an Episode!';
    } else if (tryNumber = 3) {
        guessResult.innerHTML = 'D\'oh! YOU LOSE!'
        revealAnswer.innerHTML = `${defaultImage.toUpperCase()}`
        document.getElementById('try3').src = 'donut2.png';
        document.getElementById('imageShower').src = `./images/youlose.jpg`;
    }


}
//Loads new frame when button is clicked. Resets header to default
function loadNewFrame() {
    defaultImageRandomIndex = Math.floor(Math.random() * defaultImageArray.length);
    defaultImage = defaultImageArray[defaultImageRandomIndex];
    document.getElementById('imageShower').src = `./images/imageguess/${defaultImage}.jpg`;
    guessResult.innerHTML = 'Guess the Episode';
    revealAnswer.innerHTML = '';
    tryNumber = 1;
    document.getElementById('try1').src = 'donut.png'
    document.getElementById('try2').src = 'donut.png'
    document.getElementById('try3').src = 'donut.png'
}
function loadAnotherFrame() {
    document.getElementById('imageShower').src = `./images/imageguess${tryNumber}/${defaultImage}.jpg`;
}
document.getElementById('level1').addEventListener('change', applyDropDown);
document.addEventListener('DOMContentLoaded', afterDocumentLoads);
document.getElementById('submit').addEventListener('click', checkGuess);
document.getElementById('loadFrame').addEventListener('click', loadNewFrame);
