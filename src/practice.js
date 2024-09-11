import emojiInfo from "./emojipedia";

const newMeaning = emojiInfo.map((emoji) =>{
    return emoji.meaning.substring(0, 100)
})


console.log(newMeaning)