function areaOfTriangle(side1,side2,side3)
{
    var perimeter = (side1 + side2 + side3) * 0.5;
    //Heron's formula
    var area = Math.sqrt(perimeter*(perimeter-side1)*(perimeter-side2)*(perimeter-side3));
    return area;
}
