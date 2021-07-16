//Returns the maximum number
function maximum()
{
    var maxNum = arguments[0]; //sets the first argument as the max number

    for(var i = 1; i < arguments.length; i++)
    {
	if (arguments[i] > maxNum)
	    maxNum = arguments[i];
    }
    return maxNum;
}
