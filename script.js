var clients = [];
//let div = document.createElement('div');


function insertName () {
    let clientName = document.getElementById('clientName').value;
    clients.push(clientName); 
    document.getElementById('clientName').value = "";

    showElements();
}

function finish () {
    clients.shift();
    showElements();
}

function showElements () {
    const fLen = clients.length;    
    var textHTML = "";
    for (let i = 0; i < fLen; i++) {
        textHTML += "<p>"+clients[i]+"</p>";        
    }
    let div = document.getElementById('clientsDiv');
    div.innerHTML = textHTML;
}
