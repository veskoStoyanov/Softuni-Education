using System;

namespace Mountain_Run
{
    class Program
    {
        static void Main(string[] args)
        {
            double record = double.Parse(Console.ReadLine());
            double length = double.Parse(Console.ReadLine());
            double vremeZAmetur = double.Parse(Console.ReadLine());

            double start = length * vremeZAmetur;
            double delay = Math.Floor(length / 50);

            delay *= 30;

            double total = start + delay;

            if (record > total)
            {
                Console.WriteLine($"Yes! The new record is {total:f2} seconds.");
            }
            else
            {
                total -= record;
                Console.WriteLine($"No! He was {total:f2} seconds slower.");
            }
        }
    }
}
