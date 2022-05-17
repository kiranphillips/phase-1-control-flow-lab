function scuberGreetingForFeet(amount) {
  let message
  if (amount <= 400){
    message = "This one is on me!"
  }
  else if (amount > 400 && amount < 2000){
    message = "That will be twenty bucks."
  } 
  else if (amount > 2000 && amount < 2500){
  message = "I will gladly take your thirty bucks."}
  else{
     message = 'No can do.'}

     return message
  // Write your code here!
}

function ternaryCheckCity(city){
  const response = (city === 'NYC' ? "Ok, sounds good." : "No go.")
  return response
  
  // Write your code here!
}

function switchOnCharmFromTip(gratuity){


  switch(gratuity) {
      case 'generous':
         return  "Thank you so much."
   
      case 'not as generous':
        return "Thank you."
  default:
   
     return "Bye."
  // Write your code here!
}}