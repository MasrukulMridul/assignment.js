function hotelCost(days)
{
    var totalPrice = 0;
    //First 10 days price
    if (days <= 10)
    {
       totalPrice = days * 100;
    }
   // next 10days price
    else if (days<=20)
    {
        var first10Days = 10 * 100;
        var remaining = days - 10;
        var second10Days =remaining * 80;
       totalPrice = first10Days + second10Days;

    }
    //after 20 days overall price
    else
    {
        var first10Days = 10* 100;
        var second10Days = 10 * 80;
        var remaining = days-20;
        var othersDays = remaining * 50;
        totalPrice = first10Days + second10Days + othersDays;
    }
    return totalPrice;
}