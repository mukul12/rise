/** This is a sample code for your bot**/
function MessageHandler(context, event) {
            context.console.log("test")
            if(event.message.toLowerCase() == "hi") {
                context.sendResponse("hello");
            }
            else if(event.message.toLowerCase() == "hello") {
                context.sendResponse("Hey there " + event.sender + " Do you prefer reading Wired or Techcrunch?");
            }
            else if((event.message == "wired") || (event.message == "techcrunch")) {
                setPreference(event.message);      
            }
            else if (event.message.indexOf("news") > -1 ) {
                    context.simplehttp.makeGet('https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&q=http://www.' + context.simpledb.roomleveldata.publication + '.com/feed/&num=15');
            }
            else {
                context.sendResponse('No keyword found : '+event.message); 
            }
}

function setPreference (pref) {
            context.simpledb.roomleveldata.publication = pref;
            context.sendResponse("Type 'news' to get latest headlines on " + context.simpledb.roomleveldata.publication);
        }
        
        
function HttpResponseHandler(context, event) {
var respJson = JSON.parse(event.getresp);
            var stories = respJson.responseData.feed.entries;
            var resp = "";

            //generate a random number
            var randomnumber = Math.floor(Math.random() * (stories.length - 1 + 1)) + 1;
            resp = resp + stories [randomnumber].title + "\n" + stories[randomnumber].link + "\n";

            resp = resp.replace("&nbsp", "");
            context.sendResponse(resp);
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