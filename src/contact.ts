// let fullname:string = "Lisa Simpson";
// console.log(fullname);
//
// const Konstanze:number = 5;
// var kaindorfIsTheBest:boolean = true;

const BASE_URL:string = "https://0afa4e09-2ead-41a8-8576-570505acdc3e.mock.pstmn.io";

interface Contact{
  id:number,
  name:string,
  mail:string,
  age:number,
  hobbies:string[],
  address:{
    postalcode:string,
    street:string,
    number:string
  }
}

const onGetContact = ():void => {
  // alert("Click working");

  fetch(`${BASE_URL}/api/contacts/5`)
    .then( response => {
      alert(response.status);
      if( response.status == 200){
        response.json().then( data => {
          let contact:Contact = data as Contact;
          let output = document.getElementById("output");
          output.innerText = `The contact with the ID ${contact.id} is ${contact.age} years old.`;
        });
      }
    });

}