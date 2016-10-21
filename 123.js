/** This is a sample code for your bot**/
function MessageHandler(context, event) {
         if(event.message. == "postdata") {
         var url = "https://abcserver.com/sm/postData";
         var header = {"token":"ca916a68d94","Content-Type": "application/x-www-form-urlencoded"};
         var param = "userName=John&phoneNumber=8431792747";
         context.simplehttp.makePost(url,param,header);
     }
   function HttpResponseHandler(context, event) {
           var result= JSON.parse(event.getresp);
          if(result=="success")
       context.sendResponse("We have successfully stored your data");
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



function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last get by:" + event.dbval);
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last put by:" + event.dbval);
}