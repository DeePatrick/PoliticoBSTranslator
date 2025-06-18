using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoliticoAI.DAL.Entities
{
    public class FuguEntity
    {
        public Guid Id { get; set; }

        public required string Name { get; set; }
    }
}
