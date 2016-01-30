
/*
I thought I would have fun with this one. 
The below static_wordsX variables are strings from Cards Against Humanity. 
Don't hold it against me it is Cards Against Humanity's fault. :-)

The input options are randomly words drawn (If it was to offensive I removed it).
*/
 	var static_words1 = "In a world ravaged by "; 
	var static_words2 = "our only solace is"; 
	var static_words3 = "I never truly understood ";
	var static_words4 = " until I encountered ";
	var static_words5 = "while George W. Bush was thinking about ";
	var static_words6 = " And for my next trick, I will pull ";
	var static_words7 = " out of ";

/*From the video delete when finished*/

var button = document.getElementById("submit");
//don't forget! DOM = document object model
button.addEventListener("click", onClick, false);

function onClick(evt)
{  evt.preventDefault(evt); 
  
    //Forms
    var element1 = document.getElementById("form1").elements.item(0).value;
    var element2 = document.getElementById("form1").elements.item(1).value;
    var element3 = document.getElementById("form1").elements.item(2).value;
    var element4 = document.getElementById("form1").elements.item(3).value;
    var element5 = document.getElementById("form1").elements.item(4).value;
    var element6 = document.getElementById("form1").elements.item(5).value;
    var element7 = document.getElementById("form1").elements.item(6).value;
 console.log(static_words1 + element1 + ", " + static_words2 + " " + element2 + ". "+ static_words3 + element3 + static_words4 + element4 + ", " + static_words5 + element5 + "." + static_words6 + element6 + static_words7 + element7 + ".");
 // document.getElementID("myForm").elements.item(0).value;
  // return false;
}