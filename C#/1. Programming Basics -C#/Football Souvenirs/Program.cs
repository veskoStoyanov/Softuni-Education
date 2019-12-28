using System;

namespace Football_Souvenirs
{
    class Program
    {
        static void Main(string[] args)
        {
            string team = Console.ReadLine();
            string suvenir = Console.ReadLine();

            double countSuvenir = double.Parse(Console.ReadLine());
            double sum = 0;

            if (team == "Argentina")
            {
                if (suvenir == "flags")
                {
                    sum = countSuvenir * 3.25;
                }
                else if (suvenir == "caps")
                {
                    sum = countSuvenir * 7.20;
                }
                else if (suvenir == "posters")
                {
                    sum = countSuvenir * 5.10;
                }
                else if (suvenir == "stickers")
                {
                    sum = countSuvenir * 1.25;
                }
            }
            else if (team == "Brazil")
            {
                if (suvenir == "flags")
                {
                    sum = countSuvenir * 4.20;
                }
                else if (suvenir == "caps")
                {
                    sum = countSuvenir * 8.50;
                }
                else if (suvenir == "posters")
                {
                    sum = countSuvenir * 5.35;
                }
                else if (suvenir == "stickers")
                {
                    sum = countSuvenir * 1.20;
                }
            }

            else if (team == "Croatia")
            {
                if (suvenir == "flags")
                {
                    sum = countSuvenir * 2.75;
                }
                else if (suvenir == "caps")
                {
                    sum = countSuvenir * 6.90;
                }
                else if (suvenir == "posters")
                {
                    sum = countSuvenir * 4.95;
                }
                else if (suvenir == "stickers")
                {
                    sum = countSuvenir * 1.10;
                }
            }
            else if (team == "Denmark")
            {
                if (suvenir == "flags")
                {
                    sum = countSuvenir * 3.10;
                }
                else if (suvenir == "caps")
                {
                    sum = countSuvenir * 6.50;
                }
                else if (suvenir == "posters")
                {
                    sum = countSuvenir * 4.80;
                }
                else if (suvenir == "stickers")
                {
                    sum = countSuvenir * 0.90;
                }
            }
            bool total = team == "Denmark" || team == "Croatia" || team == "Brazil" || team == "Argentina";
            bool secondTotal = suvenir == "flags" || suvenir == "caps" || suvenir == "posters" || suvenir == "stickers";

            if (total && secondTotal)
            {
                Console.WriteLine($"Pepi bought {countSuvenir} {suvenir} of {team} for {sum:f2} lv.");
            }
            else if (!(total))
            {
                Console.WriteLine("Invalid country!");
            }
            else if (!(secondTotal))
            {
                Console.WriteLine("Invalid stock!");
            }
        }
    }
}
