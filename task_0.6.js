function maximum()
{
    var maxNum = arguments[0];

    for(var i = 1; i < arguments.length; i++)
    {
	if (arguments[i] > maxNum)
	    maxNum = arguments[i];
    }
    return maxNum;
}
