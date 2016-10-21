/** This is a sample code for your bot**/
function MessageHandler(context, event) { 

if (!isNaN(event.message))
{
  var totalvalue = context.simpledb.roomleveldata.totalcount;
  
  if (!totalvalue)
      context.simpledb.roomleveldata.totalcount= parseInt(event.message,10);
    else
      context.simpledb.roomleveldata.totalcount = totalvalue + parseInt(event.message,10);
      context.sendResponse("");
} 
else if (event.message.toLowerCase() == 'total')
{    
    var temp =  context.simpledb.roomleveldata.totalcount;
     context.simpledb.roomleveldata.totalcount = 0;
  context.sendResponse(temp);
  
}

}
/** Functions declared below are required **/
function EventHandler(context, event) {
    if(! context.simpledb.botleveldata.numinstance)
        context.simpledb.botleveldata.numinstance = 0;
    numinstances = parseInt(context.simpledb.botleveldata.numinstance) + 1;
    context.simpledb.botleveldata.numinstance = numinstances;
    context.sendResponse("Thanks for adding me. You are:" + numinstances);
    
    
}

function HttpResponseHandler(context, event) {
    // if(event.geturl === "http://ip-api.com/json")
    context.sendResponse(event.getresp);
}

function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last get by:" + event.dbval);
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last put by:" + event.dbval);
}