//checks for vowels in a string
function vowelChecker(word)
{
    var newWord = word.toLowerCase();//converts argument to lowercase letters
    var arr1 = ['a','e', 'i', 'o', 'u'];
    var newString = "";
    for (var i = 0; i < newWord.length; i++)//checks for vowels
    {
	for (var j = 0; j < arr1.length; j++)
	{
	    if (arr1[j] == newWord[i])
		newString += newWord[i];
	}
    }
    var uniqueString = newString[0] + ", ";

    for (var j = 0; j < newString.length; j++)//removes dupilcate characters
    {
	if (!uniqueString.includes(newString[j]))
	{
	    uniqueString += newString[j];
	    uniqueString += ", ";
	}
    }
    var returnString = "Vowels: " + uniqueString.slice(0,-2);
    console.log(returnString);
}
