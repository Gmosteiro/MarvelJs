

const marvel = {
    render: ()=> {
        const URLAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=af09c13931ea272816d746655e13c3fb&hash=c55576355380d9ba4039ebaf3b031bed';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(URLAPI)
        .then (res => res.json())
        .then((json) => {
            for(const pj of json.data.results){
                //console.log(json, 'RES.JSON')
                let urlpj = pj.urls[0].url;
                contentHTML += `
                    <div class="col-md-4">
                        <a href="${urlpj}" target="_blank">
                            <img src="${pj.thumbnail.path}.${pj.thumbnail.extension}" alt="${pj.name}" class="img-thumbnail">
                        </a>
                        <h3 class="title">${pj.name}</h3>
                    </div>`
            }
            container.innerHTML=contentHTML;
            
        })  
    }
};
marvel.render()