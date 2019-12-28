using System;

namespace School_Supplies
{
    class Program
    {
        static void Main(string[] args)
        {
            double paket = double.Parse(Console.ReadLine());
            double marker = double.Parse(Console.ReadLine());

            double preparat = double.Parse(Console.ReadLine());
            double procent = double.Parse(Console.ReadLine());

            double result = paket * 5.80;
            double resul = marker * 7.20;

            double resu = preparat * 1.20;
            double res = result + resul + resu;

            res -= (res * procent) / 100;
            Console.WriteLine($"{res:f3}");
        }
    }
}
