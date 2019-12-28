using System;

namespace Poke_Mon
{
    class Program
    {
        static void Main(string[] args)
        {
            int power = int.Parse(Console.ReadLine());
            int distance = int.Parse(Console.ReadLine());
            int factor = int.Parse(Console.ReadLine());

            int orig = power;
            int count = 0;

            while (power >= distance)
            {
                power -= distance;
                count++;
                if (orig * 0.5 == power && factor > 0)
                {
                    power /= factor;

                }
            }
            Console.WriteLine(power);
            Console.WriteLine(count);
        }
    }
}
