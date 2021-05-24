const paises = 
[
    'África do Sul','Albânia','Alemanha','Andorra','Angola','Anguilla','Antigua','Arábia Saudita','Argentina','Armênia','Aruba','Austrália','Áustria',
    'Azerbaijão','Bahamas','Bahrein','Bangladesh','Barbados','Bélgica','Benin','Bermudas','Botsuana','Brasil','Brunei','Bulgária','Burkina Fasso','botão',
    'Cabo Verde','Camarões','Camboja','Canadá','Cazaquistão','Chade','Chile','China','Cidade do Vaticano','Colômbia','Congo','Coréia do Sul','Costa do Marfim',
    'Costa Rica','Croácia','Dinamarca','Djibuti','Dominica','EUA','Egito','El Salvador','Emirados Árabes','Equador','Eritréia','Escócia','Eslováquia','Eslovênia',
    'Espanha','Estônia','Etiópia','Fiji','Filipinas','Finlândia','França','Gabão','Gâmbia','Gana','Geórgia','Gibraltar','Granada','Grécia','Guadalupe','Guam','Guatemala',
    'Guiana','Guiana Francesa','Guiné-bissau','Haiti','Holanda','Honduras','Hong Kong','Hungria','Iêmen','Ilhas Cayman','Ilhas Cook','Ilhas Curaçao','Ilhas Marshall',
    'Ilhas Turks & Caicos','Ilhas Virgens','Ilhas Wallis e Futuna','Índia','Indonésia','Inglaterra','Irlanda','Islândia','Israel','Itália','Jamaica','Japão','Jordânia',
    'Kuwait','Latvia','Líbano','Liechtenstein','Lituânia','Luxemburgo','Macau','Macedônia','Madagascar','Malásia','Malaui','Mali','Malta','Marrocos','Martinica','Mauritânia',
    'Mauritius','México','Moldova','Mônaco','Montserrat','Nepal','Nicarágua','Niger','Nigéria','Noruega','Nova Caledônia','Nova Zelândia','Omã','Palau','Panamá','Papua-nova Guiné',
    'Paquistão','Peru','Polinésia Francesa','Polônia','Porto Rico','Portugal','Qatar','Quênia','Rep. Dominicana','Rep. Tcheca','Reunion','Romênia','Ruanda','Rússia',
    'Saipan','Samoa Americana','Senegal','Serra Leone','Seychelles','Singapura','Síria','Sri Lanka','St. Kitts & Nevis','St. Lúcia','St. Vincent','Sudão','Suécia',
    'Suiça','Suriname','Tailândia','Taiwan','Tanzânia','Togo','Trinidad','Tobago','Tunísia','Turquia','Ucrânia','Uganda','Uruguai','Venezuela','Vietnã','Zaire','Zâmbia','Zimbábue'
];

let filter = document.querySelector("#search-text");
filter.addEventListener("input", function() {
    // console.log(this.value+"$$$$$$$$$$$$$$$$$$$");

    // let resp = []

    // for (item of paises) {
    //     if (item == filter.value) {
    //         resp.push(item);
    //     }
    // }

    // console.log(resp)
});

var botao = document.querySelector("#btn");
botao.addEventListener("click", function(event){
    event.preventDefault();
    // var text = document.querySelector("#search-text");
    // console.log("lupa clicada");
    // let listaPaises = paises;
    // console.log(listaPaises);
    // console.log(this.value+"$$$$$$$$$$$$$$$$$$$");

    let resp = []

    for (item of paises) {
        if (item == filter.value) {
            resp.push(item);
        }
    }

    console.log(resp)
});





// tests and fails ------------------------------------------------------------------------

// let country = []


// function filteredCountry() {
//     for(let country of paises) {
//         console.log(country);
//         country.push(country);
//     }
//     filteredCountry("China");
// }

// console.log(country)



// var filter = document.querySelector("#search-text");
// filter.addEventListener("input", function(){
//     console.log(this.value+"%%%%%%%%%%%%%%%%%%%%%%%%%%%"); 
//     let filteredText = [1111111];
//     let inputText = filter;
//     console.log(inputText+"&&&&&&&&&&&&&&")

//     for(let item of paises) {
//         if(item == inputText) {
//             console.log(item + "#########################");
//             filteredText.push(item);
//         }
        
//     }

// console.log(filteredText+"@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
// });