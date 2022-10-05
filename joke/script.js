const api_url = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky,Christmas?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit'


        //Recuperation des donnees//


async function get_joke()
{
    const response = await fetch(api_url);
    const data = await response.json();
    table_joke(data);
}



            //Insert data//

function table_joke(data){
    
    console.table(data);

    console.log(data);

    let table_joke = document.getElementById("lines");

    table_joke.appendChild(generateJokeLine(data));
}


            //Generate lines//

function generateJokeLine(data){

    let generateJokeLine = document.createElement('TR');

                
                //Category//
    let tdCATHTML = document.createElement('TD');
    tdCATHTML.innerText = data.category;
    


                //Type//
    let tdTYPHTML = document.createElement('TD');
    tdTYPHTML.innerText = data.type;



                //Joke//
    let tdJOKHTML = document.createElement('TD');
    tdJOKHTML.innerText = data.setup;



                //Delivery//
    let tdDELHTML = document.createElement('TD');
    tdDELHTML.innerText = data.delivery;



                //Flags//
    let tdFLAHTML = document.createElement('TD');
    tdFLAHTML.innerText = data.flags;
    


                //Lang//
    let tdLANHTML = document.createElement('TD');
    tdLANHTML.innerText = data.lang;



    generateJokeLine.appendChild(tdCATHTML);
    generateJokeLine.appendChild(tdTYPHTML);
    generateJokeLine.appendChild(tdJOKHTML);
    generateJokeLine.appendChild(tdDELHTML);
    generateJokeLine.appendChild(tdFLAHTML);
    generateJokeLine.appendChild(tdLANHTML);



    return generateJokeLine;

}

get_joke();