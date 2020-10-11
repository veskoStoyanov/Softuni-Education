using System;

namespace Vacation
{
    class Program
    {
        static void Main(string[] args)
        {
            double n = double.Parse(Console.ReadLine());
            double sum = 0;

            string type = Console.ReadLine();
            string day = Console.ReadLine();
          
            if (type == "Students")
            {
                if (day == "Friday")
                {
                    sum = n * 8.45;
                }
                else if (day == "Saturday")
                {
                    sum = n * 9.80;
                }
                else if (day == "Sunday")
                {
                    sum = n * 10.46;
                }
                if (n >= 30)
                {
                    sum -= sum * 0.15;
                }
            }
            else if (type == "Business")
            {
                if (n >= 100)
                {
                    n -= 10;
                }
                if (day == "Friday")
                {
                    sum = n * 10.90;
                }
                else if (day == "Saturday")
                {
                    sum = n * 15.60;
                }
                else if (day == "Sunday")
                {
                    sum = n * 16;
                }
            }
            else if (type == "Regular")
            {
                if (day == "Friday")
                {
                    sum = n * 15;
                }
                else if (day == "Saturday")
                {
                    sum = n * 20;
                }
                else if (day == "Sunday")
                {
                    sum = n * 22.50;
                }
                if (n >= 10 && n <= 20)
                {
                    sum -= sum * 0.05;
                }
            }
            Console.WriteLine($"Total price: {sum:f2}");
        }
    }
}
