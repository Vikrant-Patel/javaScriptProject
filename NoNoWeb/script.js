 const buttontag=document.getElementById('buttontag')
 
 
 function nohandler(){
    if(buttontag.style.cssText.includes("column-reverse")){
        buttontag.style.cssText='flex-direction:column'
    }
    else{
    buttontag.style.cssText='flex-direction:column-reverse'
    }

}
function messagehandler(){
    window.open("https://api.whatsapp.com/send/?phone=yournumber..&text=hi,%20I%20like%20you")
}
