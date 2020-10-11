using System;

namespace Wedding_Seats
{
    class Program
    {
        static void Main(string[] args)
        {
            char sector = char.Parse(Console.ReadLine());
            int row = int.Parse(Console.ReadLine());

            int place = int.Parse(Console.ReadLine());
            int counter = 0;

            for (char i = 'A'; i <= sector; i++)
            {
                for (int k = 1; k <= row; k++)
                {
                    int breake = 0;
                    if (k % 2 == 0)
                    {
                        for (char z = 'a'; z <= 'z'; z++)
                        {
                            Console.WriteLine($"{i}{k}{z}");
                            counter++;
                            breake++;
                            if (breake == (place + 2))
                            {
                                break;
                            }
                        }
                    }
                    else
                    {
                        for (char m = 'a'; m <= 'z'; m++)
                        {
                            Console.WriteLine($"{i}{k}{m}");
                            counter++;
                            breake++;
                            if (breake == (place))
                            {
                                break;
                            }
                        }
                    }
                }
                row++;
            }
            Console.WriteLine(counter);
        }
    }
}
