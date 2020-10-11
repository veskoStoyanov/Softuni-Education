using System;

namespace Wedding_Time
{
    class Program
    {
        static void Main(string[] args)
        {
            double wiskey = double.Parse(Console.ReadLine());
            double countWater = double.Parse(Console.ReadLine());
            double countWine = double.Parse(Console.ReadLine());

            double countShampeyn = double.Parse(Console.ReadLine());
            double countWiskey = double.Parse(Console.ReadLine());

            double shampane = wiskey - (wiskey * 0.50);
            double wine = shampane - (shampane * 0.60);
            double water = shampane - (shampane * 0.90);

            double res = (wiskey * countWiskey) + (countWater * water) + (countShampeyn * shampane) + (countWine * wine);
            Console.WriteLine($"{res:f2}");
        }
    }
}
