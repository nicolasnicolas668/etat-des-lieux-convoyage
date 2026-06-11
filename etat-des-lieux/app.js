const vendeurCanvas = document.getElementById("signatureVendeur");
const clientCanvas = document.getElementById("signatureClient");

vendeurCanvas.width = vendeurCanvas.offsetWidth;
vendeurCanvas.height = 180;

clientCanvas.width = clientCanvas.offsetWidth;
clientCanvas.height = 180;

const vendeurPad = new SignaturePad(vendeurCanvas);
const clientPad = new SignaturePad(clientCanvas);

function clearVendeur() {
    vendeurPad.clear();
}

function clearClient() {
    clientPad.clear();
}

function saveMission() {

    const mission = {
        date: new Date().toLocaleString(),
        client: document.getElementById("client").value,
        telephone: document.getElementById("telephone").value,
        immat: document.getElementById("immat").value,
        vehicule: document.getElementById("vehicule").value,
        kmDepart: document.getElementById("kmdepart").value,
        kmArrivee: document.getElementById("kmarrivee").value,
        signatureVendeur: vendeurPad.toDataURL(),
        signatureClient: clientPad.toDataURL()
    };

    let missions =
        JSON.parse(localStorage.getItem("missions")) || [];

    missions.push(mission);

    localStorage.setItem(
        "missions",
        JSON.stringify(missions)
    );

    alert("Mission enregistrée avec succès");
}
