using System;

namespace Sea_Trip
{
    class Program
    {
        static void Main(string[] args)
        {
            double moneyFood = double.Parse(Console.ReadLine());
            double moneySuvenir = double.Parse(Console.ReadLine());

            double moneyHotel = double.Parse(Console.ReadLine());
            double res = (420.00 / 100.00) * 7.00;

            res *= 1.85;

            double result = (3 * moneyFood) + (3 * moneySuvenir);
            double fisrtDayHotel = moneyHotel * 0.9;
            double secondDayHotel = moneyHotel * 0.85;

            double thirthDayHotel = moneyHotel * 0.8;
            double total = res + result + fisrtDayHotel + secondDayHotel + thirthDayHotel;

            Console.WriteLine($"Money needed: {total:f2}");
        }
    }
}
