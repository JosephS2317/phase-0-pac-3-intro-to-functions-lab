function shout (potatoe) {
    return potatoe.toUpperCase();
}

function whisper (SHHH) {
    return SHHH.toLowerCase();
}
function logShout(str) {
    console.log (str.toUpperCase())
}

function logWhisper(str) {
    console.log (str.toLowerCase())
}

function sayHiToHeadphonedRoommate (str) {
    // initial blank response
    var response = "";
    const invitation = "Let's have dinner together!";
    // if str is lowercase
    if (str==str.toLowerCase())
    {
        response =  "I can't hear you!";
    }
    // if str is uppercase
    else if (str==str.toUpperCase()){
        response = "YES INDEED!";
    }
    // if str equals expression
    else if (str==invitation){
        response = "I would love to!"
    }


    return response;
}




