using System;

namespace Sushi_Time
{
    class Program
    {
        static void Main(string[] args)
        {
            string type = Console.ReadLine().ToLower();
            string name = Console.ReadLine();

            double count = double.Parse(Console.ReadLine());
            string home = Console.ReadLine().ToLower();

            double sum = 0;

            if (type == "sashimi")
            {
                if (name == "Sushi Zone")
                {
                    sum = count * 4.99;
                }
                else if (name == "Sushi Time")
                {
                    sum = count * 5.49;
                }
                else if (name == "Sushi Bar")
                {
                    sum = count * 5.25;
                }
                else if (name == "Asian Pub")
                {
                    sum = count * 4.50;
                }
                else
                {
                    Console.WriteLine($"{name} is invalid restaurant!");
                }
            }
            else if (type == "maki")
            {
                if (name == "Sushi Zone")
                {
                    sum = count * 5.29;
                }
                else if (name == "Sushi Time")
                {
                    sum = count * 4.69;
                }
                else if (name == "Sushi Bar")
                {
                    sum = count * 5.55;
                }
                else if (name == "Asian Pub")
                {
                    sum = count * 4.80;
                }
                else
                {
                    Console.WriteLine($"{name} is invalid restaurant!");
                }
            }
            else if (type == "uramaki")
            {

                if (name == "Sushi Zone")
                {
                    sum = count * 5.99;
                }
                else if (name == "Sushi Time")
                {
                    sum = count * 4.49;
                }
                else if (name == "Sushi Bar")
                {
                    sum = count * 6.25;
                }
                else if (name == "Asian Pub")
                {
                    sum = count * 5.50;
                }
                else
                {
                    Console.WriteLine($"{name} is invalid restaurant!");
                }
            }
            else if (type == "temaki")
            {
                if (name == "Sushi Zone")
                {
                    sum = count * 4.29;
                }
                else if (name == "Sushi Time")
                {
                    sum = count * 5.19;
                }
                else if (name == "Sushi Bar")
                {
                    sum = count * 4.75;
                }
                else if (name == "Asian Pub")
                {
                    sum = count * 5.50;
                }
                else
                {
                    Console.WriteLine($"{name} is invalid restaurant!");
                }
            }
            if (home == "y")
            {
                sum += sum * 0.2;
            }
            sum = Math.Ceiling(sum);
            if (sum > 0)
            {
                Console.WriteLine($"Total price: {sum} lv.");
            }
        }
    }
}
