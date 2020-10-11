using System;

namespace Everest
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = string.Empty;
            int count = default(int);

            int days = 1;
            int sum = 5364;

            while (true)
            {
                input = Console.ReadLine();
                if (input == "END")
                {
                    break;
                }
                if (input == "Yes")
                {
                    days++;
                    if (days > 5)
                    {
                        break;
                    }
                }
                count = int.Parse(Console.ReadLine());
                sum += count;
                if (sum >= 8848)
                {
                    break;
                }
            }
            if (input == "END" || days > 5)
            {
                Console.WriteLine("Failed!");
                Console.WriteLine(sum);
            }
            else if (sum >= 8848)
            {
                Console.WriteLine($"Goal reached for {days} days!");
            }
        }
    }
}
