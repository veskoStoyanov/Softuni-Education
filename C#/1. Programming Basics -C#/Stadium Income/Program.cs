using System;

namespace Stadium_Income
{
    class Program
    {
        static void Main(string[] args)
        {
            double countCector = double.Parse(Console.ReadLine());
            double capacitet = double.Parse(Console.ReadLine());
            double priceTicket = double.Parse(Console.ReadLine());

            double profit = capacitet * priceTicket;
            double oneCector = profit / countCector;
            double charity = (profit - (oneCector * 0.75)) / 8;

            Console.WriteLine($"Total income - {profit:f2} BGN");
            Console.WriteLine($"Money for charity - {charity:f2} BGN");
        }
    }
}
