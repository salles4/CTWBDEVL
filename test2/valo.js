// league "https://ddragon.leagueoflegends.com/cdn/14.7.1/data/en_US/champion.json"

$(function(){
    getData();
})

function getData(){
    let toAppend = "";
    fetch("https://valorant-api.com/v1/agents")
    .then(response => response.json())
    .then(json => {
        json.data.forEach(agents => {
            if (!agents.isPlayableCharacter) {
                return;
            }
            toAppend += `
                <tr>
                    <td class="text-center"><img src="${agents.displayIconSmall}" width="64"></td>
                    <td>${agents.displayName} (${agents.developerName})</td>
                    <td>${agents.description}</td>
                </tr>
            `
        });
        $("#tablebody").append(toAppend);
    });
}