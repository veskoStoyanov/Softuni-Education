using System;

namespace Elevator
{
    class Program
    {
        static void Main(string[] args)
        {
            double people = double.Parse(Console.ReadLine());
            double capacitet = double.Parse(Console.ReadLine());

            double res = Math.Ceiling(people / capacitet);

            Console.WriteLine(res);
        }
    }
}
