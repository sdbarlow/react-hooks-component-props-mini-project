import React from "react";



function Article({ title, date="January 1, 1970", preview, minutes }) {
    let image = "";
    let minuteSubtractor = minutes;
    if (minuteSubtractor > 30){
        while(minuteSubtractor>0){
            image += "🍱"
            minuteSubtractor -= 10;
        }
    } else {
        while(minuteSubtractor>0){
            image += "☕️"
            minuteSubtractor -= 5;
        }
    }
   return( <article>
        <h3>{title}</h3>
        <small>{date} · {image} {minutes}min to read</small>
        <p>{preview}</p>
    </article>
   )
}

export default Article;