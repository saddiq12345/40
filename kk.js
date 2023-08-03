function main(){
    const input = document.getElementById("input").value;
    let patternoutput=" ";

    for(let a=1 ;a<=input ;a++){
    let row =` `;

    for (let b=1 ;b<=a ;b++){
        row += " * ";
    }
    patternoutput += row +'<br>';
    }
document.getElementById("khan").
innerHTML = patternoutput;
}

function main1(){
    const input1 = document.getElementById("input1").value;
    let patternoutput=" ";

    for(let a=1 ;a<=input1 ;a++){
    let row =` `;

    for (let b=1 ;b<=input1 ;b++){
        row += " * ";
    }
    patternoutput += row +'<br>';
    }
document.getElementById("khan").
innerHTML = patternoutput;
}