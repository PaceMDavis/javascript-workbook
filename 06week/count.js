const str1 = document.getElementById("textBox1").value;

//"I can't wait to count all the letters in this string";

// A map (in JavaScript, an object) for the character=>count mappings

// Misc vars

const letterCounter = (str) => {
const counts = {};
let ch;
let count;
str = str.toLowerCase();
str = str.replace(/\W/g, '');
// Loop through the string...
for (i = 0; i < str.length; i++) {
    // Get this character
    ch = str.charAt(i); // Not all engines support [] on strings

    // Get the count for it, if we have one; we'll get `undefined` if we
    // don't know this character yet
    count = counts[ch];

    // If we have one, store that count plus one; if not, store one
    // We can rely on `count` being falsey if we haven't seen it before,
    // because we never store falsey numbers in the `counts` object.
    counts[ch] = count ? count + 1 : 1;
}

for (ch in counts) {
  document.getElementById("returnWord").innerHTML+=(`  ${ch} count: ${counts[ch]}  |`);
}
//document.getElementById("returnWord").innerHTML=word.slice(i) + word.slice(0, i) + "ay";
}
letterCounter(str1)
