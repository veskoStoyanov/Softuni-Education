using System;

namespace Wedding_Hall
{
    class Program
    {
        static void Main(string[] args)
        {
            double lenght = double.Parse(Console.ReadLine());
            double width = double.Parse(Console.ReadLine());
            double bar = double.Parse(Console.ReadLine());

            double area = lenght * width;
            double areaBar = bar * bar;

            double dancing = area * 0.19;
            double space = area - (areaBar + dancing);

            double people = space / 3.2;
            Console.WriteLine($"{Math.Ceiling(people)}");
        }
    }
}
