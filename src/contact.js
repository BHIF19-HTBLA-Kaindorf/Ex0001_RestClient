// let fullname:string = "Lisa Simpson";
// console.log(fullname);
//
// const Konstanze:number = 5;
// var kaindorfIsTheBest:boolean = true;
const BASE_URL = "https://0afa4e09-2ead-41a8-8576-570505acdc3e.mock.pstmn.io";
const onGetContact = () => {
    // alert("Click working");
    fetch(`${BASE_URL}/api/contacts/5`)
        .then(response => {
        alert(response.status);
        if (response.status == 200) {
            response.json().then(data => {
                let contact = data;
                let output = document.getElementById("output");
                output.innerText = `The contact with the ID ${contact.id} is ${contact.age} years old.`;
            });
        }
    });
};
