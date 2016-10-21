/** This is a sample code for your bot**/
function MessageHandler(context, event) {
         if(event.message== "date") {
               context.simplehttp.makeGet('http://testminister.com/json/date.json');
           }
       }
       function HttpResponseHandler(context, event) {
           var dateJson = JSON.parse(event.getresp);
           var date = dateJson.date;
           context.sendResponse("Today's date is : "+date);
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