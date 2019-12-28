using System;

namespace Spaceship
{
    class Program
    {
        static void Main(string[] args)
        {
            double width = double.Parse(Console.ReadLine());
            double lenght = double.Parse(Console.ReadLine());

            double hight = double.Parse(Console.ReadLine());
            double astroHight = double.Parse(Console.ReadLine());

            double areaRaket = width * lenght * hight;
            double roomArea = (astroHight + 0.40) * 2 * 2;
            double sum = Math.Floor(areaRaket / roomArea);

            if (sum > 3 && sum <= 10)
            {
                Console.WriteLine($"The spacecraft holds {sum} astronauts.");
            }
            else if (sum < 3)
            {
                Console.WriteLine("The spacecraft is too small.");
            }
            else if (sum > 10)
            {
                Console.WriteLine("The spacecraft is too big.");
            }

        }
    }
}
