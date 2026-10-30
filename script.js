const form=document.getElementByld("contact Form");
const form=document.getElementByld("message");
 

form.addEventListner("Submit",function(event){
    event.preventDefault();
}
  const name= document.getElementByld("name").value.trim();
  MessageChannel.textContent=Thankyou,${name}!your form was submitted.;
  form,reset();
});