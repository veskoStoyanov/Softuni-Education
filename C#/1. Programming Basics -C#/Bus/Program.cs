using System;

namespace Bus
{
    class Program
    {
        static void Main(string[] args)
        {
            double people = double.Parse(Console.ReadLine());
            double stop = double.Parse(Console.ReadLine());

            double enter = default(double);
            double exit = default(double);

            double sum = people;

            for (int i = 1; i <= stop; i++)
            {
                exit = double.Parse(Console.ReadLine());
                enter = double.Parse(Console.ReadLine());

                if (i % 2 != 0)
                {
                    sum -= exit;
                    sum += enter + 2;
                }
                else
                {
                    sum -= exit;
                    sum -= 2;
                    sum += enter;
                }
            }

            Console.WriteLine($"The final number of passengers is : {sum}");
        }
    }
}
