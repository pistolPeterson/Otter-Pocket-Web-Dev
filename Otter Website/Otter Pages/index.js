const OtterPicPrefix = "Otter Pics\\OtterPic"; //every otter pic name starts with this string
const OtterPicExt = ".jpg"; //every otter pic is a jpg file, we add this at the end of the string 

otterPicIndex = 0; //this number is what differentiates each picture, we will pick a random number, we are making it 1 by default 
const amtOfOtterPics = 15;//How many otter pics are in the otter pages? 

let picFavoriteArray = new Array(amtOfOtterPics).fill(0);




function showOtter() {
    var prevIndex = otterPicIndex;

    //generate a random index based on size of otter pic folder
    otterPicIndex = getRandomInt(0, amtOfOtterPics);

    //if the last image is the same as this image, choose another img
    //this is so we dont click and get same img 
    if (prevIndex == otterPicIndex)
        otterPicIndex = getAnotherIndexFromPic();
    const storedArrays = JSON.parse(localStorage.getItem('links'));
    if (storedArrays == null) {
        localStorage.setItem('links', JSON.stringify(picFavoriteArray));
    }
    console.log(storedArrays)
    //set up the name of the URL of the img, using its index 
    document.getElementById("otterPicId").src = OtterPicPrefix + otterPicIndex.toString() + OtterPicExt;

    //shows image
    document.getElementById("otterPicId").style.visibility = "visible";

}

function likeOtterPic() {
    const storedArrays = JSON.parse(localStorage.getItem('links'));
    picFavoriteArray = storedArrays;

    picFavoriteArray[otterPicIndex]++;
    console.log("increasing index");
    localStorage.setItem('links', JSON.stringify(picFavoriteArray));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getAnotherIndexFromPic() {
    newIndex = getRandomInt(0, amtOfOtterPics);
    return newIndex;
}

//SHOW FAVORITES LOGIC 


function initializeImages() {
    const storedArrays = JSON.parse(localStorage.getItem('links'));
    console.log(storedArrays + "this is from fav load")
    document.getElementById("FavPic1").src = OtterPicPrefix + findLargestFromIndex() + OtterPicExt; //find largetst amt index and put it here
    document.getElementById("FavPic2").src = OtterPicPrefix + find2ndLargestFromIndex() + OtterPicExt;
    document.getElementById("FavPic3").src = OtterPicPrefix + find3rdLargestFromIndex() + OtterPicExt;
    document.getElementById("FavPic4").src = OtterPicPrefix + find4thLargestFromIndex() + OtterPicExt;
}


function findLargestFromIndex() {
    const storedArrays = JSON.parse(localStorage.getItem('links'));

    const max = Math.max(...storedArrays);

    const index = storedArrays.indexOf(max);
    return index;
}

function find2ndLargestFromIndex() {
    const storedArrays = JSON.parse(localStorage.getItem('links'));

    const max = Math.max(...storedArrays);
    const index = storedArrays.indexOf(max);
    //storedArrays[index] is the max
    // iterate again but skip index 
    var newMax = 0;
    for (let i = 0; i < Object.keys(storedArrays).length; i++) {
        if (i == index)
            continue;
        if (storedArrays[i] > newMax)
            newMax = storedArrays[i];
    }

    return storedArrays.indexOf(newMax);
}

function find3rdLargestFromIndex() {
    const storedArrays = JSON.parse(localStorage.getItem('links'));

    const max = Math.max(...storedArrays);
    const index = storedArrays.indexOf(max);
    //storedArrays[index] is the max
    // iterate again but skip index 
    var newMax = 0;
    for (let i = 0; i < Object.keys(storedArrays).length; i++) {
        if (i == index)
            continue;
        if (storedArrays[i] > newMax)
            newMax = storedArrays[i];
    }


    var _newMax = 0;
    for (let i = 0; i < Object.keys(storedArrays).length; i++) {
        if (i == index || i == storedArrays.indexOf(newMax))
            continue;
        if (storedArrays[i] > _newMax)
            _newMax = storedArrays[i];
    }

    return storedArrays.indexOf(_newMax);
}

function find4thLargestFromIndex() {
    const storedArrays = JSON.parse(localStorage.getItem('links'));

    const max = Math.max(...storedArrays);
    const index = storedArrays.indexOf(max);
    //storedArrays[index] is the max
    // iterate again but skip index 
    var newMax = 0;
    for (let i = 0; i < Object.keys(storedArrays).length; i++) {
        if (i == index)
            continue;
        if (storedArrays[i] > newMax)
            newMax = storedArrays[i];
    }


    var _newMax = 0;
    for (let i = 0; i < Object.keys(storedArrays).length; i++) {
        if (i == index || i == storedArrays.indexOf(newMax))
            continue;
        if (storedArrays[i] > _newMax)
            _newMax = storedArrays[i];
    }

    var lastMax = 0;
    for (let i = 0; i < Object.keys(storedArrays).length; i++) {
        if (i == index || i == storedArrays.indexOf(newMax) || i == storedArrays.indexOf(_newMax))
            continue;
        if (storedArrays[i] > lastMax)
            lastMax = storedArrays[i];
    }

    return storedArrays.indexOf(lastMax);
}






/*
explore ways to make the pictures stay put 


*/