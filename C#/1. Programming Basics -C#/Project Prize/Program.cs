using System;

namespace Project_Prize
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            double nagrada = double.Parse(Console.ReadLine());

            double number = default(double);
            double sum = 0;

            for (int i = 1; i <= n; i++)
            {
                number = double.Parse(Console.ReadLine());
                if (i % 2 == 0)
                {
                    sum += number * 2;
                }
                else
                {
                    sum += number;
                }
            }
            double total = sum * nagrada;
            Console.WriteLine($"The project prize was {total:f2} lv.");
        }
    }
}
