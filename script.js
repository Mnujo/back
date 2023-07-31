

var index = 0;


function see(){

    var colors = ["blue", "black", "teal", "orange", "indigo", "red", "violet", "maroon", "green", "purple", "white"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length)
    index = 0;
}



