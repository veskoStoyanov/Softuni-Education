

namespace DefiningClasses
{
    using System;
    using System.Collections.Generic;
    using System.Text;
   public class Engine
    {
        private const string DefaultStringValue = "n/a";
        private const int DefaultIntValue = -1;
        public Engine(string model, int power, int displaycement, string efficiency)
        {
            this.Model = model;
            this.Power = power;
            this.Displacement = displaycement;
            this.Efficiency = efficiency;
        }
        public Engine(string model, int power, int displaycement)
            : this(model, power, displaycement, DefaultStringValue)
        {

        }

        public Engine(string model, int power, string efficiency)
           : this(model, power,DefaultIntValue, efficiency)
        {

        }

        public Engine(string model, int power)
           : this(model, power, DefaultIntValue, DefaultStringValue)
        {

        }

        public string Model { get; set; }
        public int Power { get; set; }
        public int Displacement { get; set; }

        public string Efficiency { get; set; }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine(Model);
            sb.AppendLine(Power.ToString());
            sb.AppendLine(Displacement.ToString());
            sb.Append(Efficiency);
            return sb.ToString();
        }

    }

}
