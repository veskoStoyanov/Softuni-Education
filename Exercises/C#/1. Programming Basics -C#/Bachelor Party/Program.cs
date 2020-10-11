using System;

namespace Bachelor_Party
{
    class Program
    {
        static void Main(string[] args)
        {
            double forSinger = double.Parse(Console.ReadLine());
            double people = default(double);

            string person = string.Empty;
            double res = 0;

            double group = 0;
            double sumPeople = 0;

            while (true)
            {
                person = Console.ReadLine();
                if (person == "The restaurant is full")
                {
                    break;
                }
                people = double.Parse(person);

                if (people < 5)
                {
                    res += people * 100;
                }
                else if (people >= 5)
                {
                    res += people * 70;
                }
                sumPeople += people;
                group++;
            }
            if (res >= forSinger)
            {
                res -= forSinger;
                Console.WriteLine($"You have {sumPeople} guests and {res} leva left.");
            }
            else
            {
                forSinger -= res;
                Console.WriteLine($"You have {sumPeople} guests and {res} leva income, but no singer.");
            }
        }
    }
}
