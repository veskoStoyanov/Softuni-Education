using System;
using System.Collections.Generic;
using System.Text;

namespace Simple_Text_Editor
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            Stack<string> vercions = new Stack<string>();

            StringBuilder text = new StringBuilder();

            for (int i = 0; i < n; i++)
            {
                string[] token = Console.ReadLine().Split();

                string command = token[0];

                switch (command)
                {
                    case "1":
                        vercions.Push(text.ToString());

                        string someStr = token[1];

                        text.Append(someStr);
                        break;
                    case "2":
                        vercions.Push(text.ToString());

                        int remove = int.Parse(token[1]);

                        text.Remove(text.Length - remove, remove);
                        break;
                    case "3":
                        int index = int.Parse(token[1]) - 1;

                        Console.WriteLine(text[index]);
                        break;
                    case "4":
                        text.Clear();
                        text.Append(vercions.Pop());
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
