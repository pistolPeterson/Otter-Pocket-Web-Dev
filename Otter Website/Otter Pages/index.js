const OtterPicPrefix = "Otter Pics\\OtterPic"; //every otter pic name starts with this string
const OtterPicExt = ".jpg"; //every otter pic is a jpg file, we add this at the end of the string 

otterPicIndex = 1; //this number is what differentiates each picture, we will pick a random number, we are making it 1 by default 
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

    picFavoriteArray[otterPicIndex]++;
    console.log(picFavoriteArray);
    localStorage.setItem('links', JSON.stringify(picFavoriteArray));
    //set up the name of the URL of the img, using its index 
    document.getElementById("otterPicId").src = OtterPicPrefix + otterPicIndex.toString() + OtterPicExt;

    //shows image
    document.getElementById("otterPicId").style.visibility = "visible";

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
    console.log(storedArrays);
    document.getElementById("FavPic1").src = OtterPicPrefix + findLargestFromIndex() + OtterPicExt; //find largetst amt index and put it here
    document.getElementById("FavPic2").src = OtterPicPrefix + 4 + OtterPicExt;
    document.getElementById("FavPic3").src = OtterPicPrefix + 4 + OtterPicExt;
    document.getElementById("FavPic4").src = OtterPicPrefix + 4 + OtterPicExt;
}


function findLargestFromIndex() {
    const storedArrays = JSON.parse(localStorage.getItem('links'));

    const max = Math.max(...storedArrays);

    const index = storedArrays.indexOf(max);
    return index;
}
/*
start-> Initialize an int array of size amtOfOtterPics to 0

when button is press and image is selected, increment that array place 


in favorites, show 4 images of a default picture 
make temp array and sort it, choose top 4 and load them in the images, make this another on load method  



*/