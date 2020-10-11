using System;

namespace Chore_Wars
{
    class Program
    {
        static void Main(string[] args)
        {
            int timeDishes = 0;
            int timeCleaning = 0;
            int timeLaundry = 0;
            while (true)
            {
                string input = Console.ReadLine();
                if (input == "wife is happy")
                    break;

                string patternDishes = @"<([a-z0-9]+)>";
                string patternCleaning = @"\[([A-Z0-9]+)\]";
                string patternLaundry = @"{(.+)}";

                Regex regexDishes = new Regex(patternDishes);
                Regex regexCleaning = new Regex(patternCleaning);
                Regex regexLaundry = new Regex(patternLaundry);

                Match matchDihes = regexDishes.Match(input);
                Match matchCleaning = regexCleaning.Match(input);
                Match matchCLaundy = regexLaundry.Match(input);

                if (matchDihes.Success)
                {
                    timeDishes += GetNumberInString(matchDihes.Groups[1].Value);
                }
                else if (matchCleaning.Success)
                {
                    timeCleaning += GetNumberInString(matchCleaning.Groups[1].Value);
                }
                else if (matchCLaundy.Success)
                {
                    timeLaundry += GetNumberInString(matchCLaundy.Groups[1].Value);
                }
            }
            Console.WriteLine($"Doing the dishes - {timeDishes} min.");
            Console.WriteLine($"Cleaning the house - {timeCleaning} min.");
            Console.WriteLine($"Doing the laundry - {timeLaundry} min.");

            int totalTime = timeDishes + timeCleaning + timeLaundry;

            Console.WriteLine($"Total - {totalTime} min.");
        }
        public static int GetNumberInString(string text)
        {
            int sum = 0;
            foreach (var symbol in text)
            {
                if (char.IsDigit(symbol))
                {
                    sum += symbol - '0';
                }
            }
            return sum;
        }
    }
}
