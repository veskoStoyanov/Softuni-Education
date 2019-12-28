using System;
using System.Collections.Generic;
using System.Linq;

namespace SoftUni_Course_Planning
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> list = Console.ReadLine()
                 .Split(", ")
             .ToList();

            while (true)
            {
                string[] array = Console.ReadLine()
                    .Split(":");
                if (array[0] == "course start")
                    break;

                string command = array[0];

                if (command == "Add")
                {
                    string lesson = array[1];

                    if (!list.Contains(lesson))
                    {
                        list.Add(lesson);
                    }
                }
                else if (command == "Insert")
                {
                    string lesson = array[1];
                    int index = int.Parse(array[2]);

                    if (!list.Contains(lesson))
                    {
                        list.Insert(index, lesson);
                    }
                }
                else if (command == "Remove")
                {
                    list = Remove(list, array);
                }

                else if (command == "Swap")
                {
                    list = Swap(list, array);
                }

                else if (command == "Exercise")
                {
                    list = Exercise(list, array);
                }
            }
            for (int i = 1; i <= list.Count; i++)
            {
                Console.WriteLine($"{i}.{list[i - 1]}");
            }
        }
        public static List<string> Swap(List<string> list, string[] array)
        {
            int indexOne = -1;
            int indexTwo = -1;

            string lessonOne = array[1];
            string lessonTwo = array[2];

            string exOne = string.Empty;
            string exTwo = string.Empty;

            if (list.Contains(lessonOne) && list.Contains(lessonTwo))
            {
                indexOne = list.IndexOf(lessonOne);
                indexTwo = list.IndexOf(lessonTwo);

                list.RemoveAt(indexOne);
                list.Insert(indexOne, lessonTwo);

                list.RemoveAt(indexTwo);
                list.Insert(indexTwo, lessonOne);


                exOne = $"{lessonOne}-Exercise";
                exTwo = $"{lessonTwo}-Exercise";

                if (list.Contains(exOne))
                {
                    list.Remove(exOne);

                    if (indexTwo == list.Count - 1)
                    {
                        list.Add(exOne);
                    }

                    else
                    {
                        list.Insert(indexTwo + 1, exOne);
                    }
                }
                if (list.Contains(exTwo))
                {
                    list.Remove(exTwo);

                    if (indexOne == list.Count - 1)
                    {
                        list.Add(exTwo);
                    }

                    else
                    {
                        list.Insert(indexOne + 1, exTwo);
                    }
                }
            }
            return list;
        }

        public static List<string> Exercise(List<string> list, string[] array)
        {
            string lesson = array[1];
            string ex = $"{lesson}-Exercise";
            if (list.Contains(lesson))
            {
                int index = list.IndexOf(lesson);

                if (index == list.Count - 1)
                {
                    list.Add(ex);
                }
                else
                {
                    if (!(list[index + 1] == ex))
                    {
                        list.Insert(index + 1, ex);
                    }
                }
            }
            else
            {
                list.Add(lesson);
                list.Add(ex);
            }
            return list;
        }
        public static List<string> Remove(List<string> list, string[] array)
        {
            string lesson = array[1];
            string ex = $"{lesson}-Exercise";

            if (list.Contains(lesson))
            {
                list.Remove(lesson);
            }

            if (list.Contains(ex))
            {
                list.Remove(ex);
            }

            return list;
        }
    }
}
