# GST 2019 Rephel/Riddle

- Hosted at awoo.genshiken-itb.org

Old /answer path with textbox input has been scrapped from the original website, but it's still accessible by doing manual POST request to either / or /answer, and the server is still up and running.

## What's this?
This repository contains the source code used for Rephel riddle in Genshiken Staff Training 2019

Several files are not directly linked to the index.js file in this repository, so I'll leave that for the reader to figure out.

## Stage 1
A quite an easy one to start.

Answer : morning dew

## Stage 2
Simply look into your keyboard, ahh... yes... you're a sailor, what even is a keyboard, ay?

Answer : F

## Stage 3
A morse code had been written on one of y'all's illustration back in Day 2.
It leads into a .txt file that has ciphered message in it.
Take the each first letter of every word, form a string, use the keyword "GAME", and decipher using "Playfair Cipher".
Quickly you'd find "lustrationisthewaytotellmessages"
Complete the first 2 letter, and

Answer : illustration is the way to tell messages

## Stage 4
After meeting with the old loyal customer, he told you to go to see "The Statue"

...


That statue is moving, and tries to tell a story?

Answer : West South East North

And there goes.... [Array]
A bag of word, huh?
[Note] : One of the usage of array is to act as a bag of word.
### Source code explanation
> function b() takes string input which predetermined from RANDOM selection of phrases or words, with RANDOM string assigned to it.

> Taking the answer from the direction which the statue had pointed, you can tell that West South East North can be abbreviated into WSEN

> "You're thinking that this thing gonna just be like that, eh? Not that fast, alfonso."

> "North" often thought as "forward", or "go up", in this case, "ascension". Replace the last letter in WSEN into A so you get WSEA

> AS you notice from the source code in index.js, it takes the first letter of every item to make a string, and compare it with "wsea".

> If you're right, then.....yay congrats.

> If not, then jump from the plank, ay.

## Stage 5
Something is coming... But... what is it?

Answer : open "war.txt"
