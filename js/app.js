

const marvel = {
    render: ()=> {
        const URLAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=af09c13931ea272816d746655e13c3fb&hash=B4DDC8E1418CB203E8878A50FB2670D4";
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(URLAPI)
        .then (res => res.json())
        .then((json) => {
            console.log(json, 'RES.JSON')
        })  
    }
};
marvel.render()