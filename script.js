const emojis =
    [
        {
            "emoji": "ðŸ˜€",
            "hexcode": "1F600",
            "group": "smileys-emotion",
            "subgroups": "face-smiling",
            "annotation": "grinning face",
            "tags": "face, grin",
            "openmoji_tags": "smile, happy",
            "openmoji_author": "Emily JÃ¤ger",
            "openmoji_date": "2018-04-18",
            "skintone": "",
            "skintone_combination": "",
            "skintone_base_emoji": "",
            "skintone_base_hexcode": "",
            "unicode": 1,
            "order": 1
        },
        {
            "emoji": "ðŸ˜ƒ",
            "hexcode": "1F603",
            "group": "smileys-emotion",
            "subgroups": "face-smiling",
            "annotation": "grinning face with big eyes",
            "tags": "face, mouth, open, smile",
            "openmoji_tags": "eyes, teeth",
            "openmoji_author": "Emily JÃ¤ger",
            "openmoji_date": "2018-04-18",
            "skintone": "",
            "skintone_combination": "",
            "skintone_base_emoji": "",
            "skintone_base_hexcode": "",
            "unicode": 0.6,
            "order": 2
        },
        {
            "emoji": "ðŸ˜„",
            "hexcode": "1F604",
            "group": "smileys-emotion",
            "subgroups": "face-smiling",
            "annotation": "grinning face with smiling eyes",
            "tags": "eye, face, mouth, open, smile",
            "openmoji_tags": "happy, teeth",
            "openmoji_author": "Emily JÃ¤ger",
            "openmoji_date": "2018-04-18",
            "skintone": "",
            "skintone_combination": "",
            "skintone_base_emoji": "",
            "skintone_base_hexcode": "",
            "unicode": 0.6,
            "order": 3
        },
        {
            "emoji": "ðŸ˜",
            "hexcode": "1F601",
            "group": "smileys-emotion",
            "subgroups": "face-smiling",
            "annotation": "beaming face with smiling eyes",
            "tags": "eye, face, grin, smile",
            "openmoji_tags": "happy, teeth, mouth",
            "openmoji_author": "Emily JÃ¤ger",
            "openmoji_date": "2018-04-18",
            "skintone": "",
            "skintone_combination": "",
            "skintone_base_emoji": "",
            "skintone_base_hexcode": "",
            "unicode": 0.6,
            "order": 4
        },
    ]

console.log(emojis);

let arrayCodigos = [];

emojis.forEach(code => {
    arrayCodigos.push(code.hexcode),
        console.log(arrayCodigos);

});
document.getElementById("meta1").textContent = arrayCodigos[0];
document.getElementById("meta2").textContent = arrayCodigos[1];
document.getElementById("meta3").textContent = arrayCodigos[2];
document.getElementById("meta4").textContent = arrayCodigos[3];




/*const select = document.createElement('select');


emojis.forEach(emoji => {
  const option = document.createElement('option');
  option.value = emoji.hexcode;
  option.textContent = `${emoji.hexcode}`;
  select.appendChild(option);
});
 
const emojiImage = document.createElement('img');
emojiImage.style.display = 'none'; 
 
 
select.addEventListener('change', (event) => {
  const selectedHexcode = event.target.value;
  emojiImage.src = `https://openmoji.org/data/color/svg/${selectedHexcode}.svg`;
  emojiImage.style.display = 'block'; 
});
 
 
document.body.appendChild(select);
document.body.appendChild(emojiImage);*/

