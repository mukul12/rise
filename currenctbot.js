/** This is a sample code for your bot**/
function MessageHandler(context, event) {
   if(event.message=='convert'){
     context.simplehttp.makeGet("http://api.fixer.io/latest?base=USD&symbols=INR",null,currencyConverter);
     return;
    }
}
function currencyConverter(context,event){
   var currObj = JSON.parse(event.getresp);
   var inrVal = currObj.rates.INR;
   context.sendResponse("The current value of USD is "+inrVal+" INR");
}
function HttpResponseHandler(context, event) {

}
      
       
/** Functions declared below are required **/
function EventHandler(context, event) {
    if(! context.simpledb.botleveldata.numinstance)
        context.simpledb.botleveldata.numinstance = 0;
    numinstances = parseInt(context.simpledb.botleveldata.numinstance) + 1;
    context.simpledb.botleveldata.numinstance = numinstances;
    context.sendResponse("Thanks for adding me. You are:" + numinstances);
    
    
}



function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last get by:" + event.dbval);
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last put by:" + event.dbval);
}