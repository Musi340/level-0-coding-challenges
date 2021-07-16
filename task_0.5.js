//Area of a triangle
function areaOfTriangle(num1,num2,num3)
{
    var perimeter = (num1 + num2 + num3) * 0.5;
    //Heron's formula
    var area = Math.sqrt(perimeter*(perimeter-num1)*(perimeter-num2)*(perimeter-num3));
    return area;
}
