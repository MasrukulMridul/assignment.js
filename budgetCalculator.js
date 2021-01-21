function budgetCalculator(watch,phone,laptop )
{
    var watchRate = 50;
    totalWatchRate = watch*watchRate;

   var phoneRate = 100;
   totalPhoneRate = phone * phoneRate;

   var laptopRate = 500;
   totalLaptopRate = laptop * laptopRate;

   var totalBudget = totalWatchRate + totalPhoneRate + totalLaptopRate;

   return totalBudget;
}