function timeConverter(num1)
{
    var theHours = Math.floor(num1 / 60);
    var theMins = num1 % 60;

    if (theHours == 1 && theMins == 1)
	console.log("%d hour, %d minute", theHours, theMins);
    else if(theHours == 1 && theMins != 1)
	console.log("%d hour, %d minutes", theHours, theMins);
    else if(theHours != 1 && theMins == 1)
	console.log("%d hours, %d minute", theHours, theMins);
    else
	console.log("%d hours, %d minutes", theHours, theMins);

}
