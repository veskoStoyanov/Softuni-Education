using System;

namespace Wedding_Presents
{
    class Program
    {
        static void Main(string[] args)
        {
            double allGests = double.Parse(Console.ReadLine());
            double allGift = double.Parse(Console.ReadLine());
            string type = string.Empty;
            double money = 0;

            double elMashin = 0;
            double vauchar = 0;
            double other = 0;


            for (int i = 1; i <= allGift; i++)
            {
                type = Console.ReadLine().ToLower();

                if (type == "a")
                {
                    money++;
                }
                else if (type == "b")
                {
                    elMashin++;
                }
                else if (type == "v")
                {
                    vauchar++;
                }
                else if (type == "g")
                {
                    other++;
                }
            }
            double resMoney = (money / allGift) * 100;
            double resElMashin = (elMashin / allGift) * 100;
            double resVauchar = (vauchar / allGift) * 100;

            double resOther = (other / allGift) * 100;
            double resAllGests = (allGift / allGests) * 100;

            Console.WriteLine($"{resMoney:f2}%");
            Console.WriteLine($"{resElMashin:f2}%");
            Console.WriteLine($"{resVauchar:f2}%");

            Console.WriteLine($"{resOther:f2}%");
            Console.WriteLine($"{resAllGests:f2}%");
        }
    }
}
