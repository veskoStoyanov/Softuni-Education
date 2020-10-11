using System;
using System.Collections.Generic;
using System.Linq;

namespace DefiningClasses
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            int cnr = int.Parse(Console.ReadLine());

            List<Engine> engines = new List<Engine>();
            List<Car> cars = new List<Car>();

            for (int i = 0; i < cnr; i++)
            {
                Engine engine = null;
                string[] inputEngine = Console.ReadLine()
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries);

                string model = inputEngine[0];
                int power = int.Parse(inputEngine[1]);

                if (inputEngine.Length == 2)
                {
                    engine = new Engine(model, power);
                }
                else if (inputEngine.Length == 4)
                {
                    int displaycement = int.Parse(inputEngine[2]);
                    string efficiency = inputEngine[3];

                    engine = new Engine(model, power, displaycement, efficiency);
                }

                else
                {
                    bool isDisplaycement = int.TryParse(inputEngine[2], out int displaycement);

                    if (isDisplaycement)
                    {
                        engine = new Engine(model, power, displaycement);
                    }
                    else
                    {
                        engine = new Engine(model, power, inputEngine[3]);

                    }
                }

                engines.Add(engine);
            }

            int carCnr = int.Parse(Console.ReadLine());

            for (int i = 0; i < carCnr; i++)
            {
                string[] carInput = Console.ReadLine()
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries);

                string model = carInput[0];
                string engineModel = carInput[1];

                Engine engine = engines.Where(x => x.Model == engineModel).FirstOrDefault();

                Car car = null;
                if (carInput.Length == 2)
                {
                    car = new Car(model, engine);
                }

                else if (carInput.Length == 4)
                {
                    double weight = double.Parse(carInput[2]);
                    string color = carInput[3];

                    car = new Car(model, engine, weight, color);
                }

                else
                {
                    bool isWeight = double.TryParse(carInput[2], out double weight);

                    if(isWeight)
                    {
                        car = new Car(model, engine, weight);
                    }
                    else
                    {
                        car = new Car(model, engine, carInput[2]);
                    }
                }

                cars.Add(car);

            }


            Console.WriteLine(String.Join(Environment.NewLine, cars));
        }
    }
}
