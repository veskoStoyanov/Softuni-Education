using System;

namespace Group_Stage
{
    class Program
    {
        static void Main(string[] args)
        {
            string nameTeam = Console.ReadLine();
            int countGames = int.Parse(Console.ReadLine());
            int resultSum = 0;

            int sum = 0;
            do
            {

                int num = int.Parse(Console.ReadLine());
                int number = int.Parse(Console.ReadLine());

                resultSum += num - number;

                if (num > number)
                {
                    sum += 3;
                }
                else if (num == number)
                {
                    sum += 1;
                }
                countGames--;

            } while (countGames > 0);

            if (resultSum >= 0)
            {
                Console.WriteLine($"{nameTeam} has finished the group phase with {sum} points.");
                Console.WriteLine($"Goal difference: {resultSum}.");
            }
            else
            {
                Console.WriteLine($"{nameTeam} has been eliminated from the group phase.");

                Console.WriteLine($"Goal difference: {resultSum}.");
            }
        }
    }
}
