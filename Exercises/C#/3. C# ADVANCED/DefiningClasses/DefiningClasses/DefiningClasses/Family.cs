


namespace DefiningClasses
{
    using System.Linq;
    using System.Collections.Generic;
    public class Family
    {
        private List<Person> people = new List<Person>();

       public void AddMember(Person member)
        {
            this.people.Add(member);
        }

        public Person GetOldestMember()
        {
            return this.people.OrderByDescending(x => x.Age).FirstOrDefault();
        }

        public List<Person> GetOlderThanThirty()
        {
            return this.people.Where(x => x.Age > 30).OrderByDescending(x => x.Name).ToList();
        }
    }
}
