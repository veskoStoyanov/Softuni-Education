
namespace DefiningClasses

{
    using System;
    using System.Collections.Generic;
    using System.Text;
    class Car
    {
        private const string DefaultStringValue = "n/a";
        private const int DefaultDoubleValue = -1;

        public Car(string model, Engine engine, double weight, string color)
        {
            this.Model = model;
            this.Engine = engine;
            this.Weight = weight;
            this.Color = color;
        }
        public Car(string model, Engine engine, string color)
            :this(model, engine, DefaultDoubleValue, color)
        {

        }
        public Car(string model, Engine engine, double weight)
           : this(model, engine, weight, DefaultStringValue)
        {

        }
        public Car(string model, Engine engine)
         : this(model, engine, DefaultDoubleValue, DefaultStringValue)
        {

        }
        public string Model { get; set; }
        public Engine Engine { get; set; }
        public double Weight { get; set; }

        public string Color { get; set; }


        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine(Model);
            sb.AppendLine(Engine.ToString());
            sb.AppendLine(Weight.ToString());
            sb.Append(Color);
            return sb.ToString();
        }
    }
}
