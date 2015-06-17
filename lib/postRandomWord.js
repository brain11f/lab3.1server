'use strict';

module.exports = function(word, object) {
    if (object.hasOwnProperty(word)) {
        return {msg: 'Thanks for trying, but we have that word already!'};
    } else {
        object[word] = true;
        return {msg: 'Thanks for submitting your awesome word: ' + word + '!'};
    }  
};