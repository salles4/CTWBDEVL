
fetch("../test3/PeriodicTableJSON.json")
  .then(response => response.json())
  .then(result => {
    toAppend = ""
    result.elements.forEach(element => {
        toAppend += `
        <tr>
        <td><img class="align-center" src="${element.image.url}" width="128"></td>
        <td class="text-center">${element.number}</td>
        <td class="text-center">${element.symbol}</td>
        <td class="text-center">${element.name}</td>
        <td>${element.summary}</td>
        </tr>
        `
    });
    $("#dataList").append(toAppend)
  })
  .catch(error => console.log('error', error));
