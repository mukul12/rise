/** This is a sample code for your bot**/
function MessageHandler(context, event) {
         if(event.message=='1452'){
      context.simpledb.doGet("1452");
        }
      }
 
          
           function DbGetHandler(context, event) {       
   var bugObj = JSON.parse(event.dbval);
             var user = bugObj.userName;
   var lastupdate = bugObj.lastUpdated;
   var status = bugObj.status;
   var comment = bugObj.comment; 
   context.sendResponse(user+" "+lastupdate+" "+comment+" "+status);
    }

function DbPutHandler(context, event) {
      context.sendResponse("New update in the bug, type in the bug id to see the update");
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