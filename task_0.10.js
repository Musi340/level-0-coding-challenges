function compareStrings(string1,string2)
{
    var newString = "";
    for(var i = 0; i < string1.length; i++)
    {
	for(var j = 0; j < string2.length; j++)
	{
	    if (string1[i] == string2[j])
	    {
		newString += string1[i];
	    }

	}
    }
    var finalString = "";
    for (var j = 0; j < newString.length; j++)//removes duplicate letters
    {
	if (!finalString.includes(newString[j]) && j < newString.length - 1)
	{
	    finalString += newString[j];
	    finalString += ",";//adds comma as a delimiter to all letters except the last one
	}
	else if (!finalString.includes(newString[j]))
	    finalString += newString[j];
    }
    console.log("Common letters: %s", finalString);
}
