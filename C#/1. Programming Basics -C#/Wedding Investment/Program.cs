using System;

namespace Wedding_Investment
{
    class Program
    {
        static void Main(string[] args)
        {
            string typeYear = Console.ReadLine().ToLower();
            string typeContract = Console.ReadLine().ToLower();

            string desert = Console.ReadLine().ToLower();
            double countMonth = double.Parse(Console.ReadLine());

            double sum = 0;

            if (typeYear == "one")
            {
                switch (typeContract)
                {
                    case "small":
                        sum = 9.98; break;
                    case "middle":
                        sum = 18.99; break;
                    case "large":
                        sum = 25.98; break;
                    case "extralarge":
                        sum = 35.99; break;
                    default: break;
                }
            }
            else if (typeYear == "two")
            {
                switch (typeContract)
                {
                    case "small":
                        sum = 8.58; break;
                    case "middle":
                        sum = 17.09; break;
                    case "large":
                        sum = 23.59; break;
                    case "extralarge":
                        sum = 31.79; break;
                    default: break;
                }
            }
            if (desert == "yes")
            {
                if (sum <= 10)
                {
                    sum += 5.50;
                }
                else if (sum <= 30)
                {
                    sum += 4.35;
                }
                else if (sum > 30)
                {
                    sum += 3.85;
                }
            }
            double total = sum * countMonth;

            if (typeYear == "two")
            {
                total -= total * 0.0375;
            }
            Console.WriteLine($"{total:f2} lv.");
        }
    }
}
