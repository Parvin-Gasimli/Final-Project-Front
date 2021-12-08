using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShopWise.Models
{
    public class NewCollection
    {   public int Id { get; set; }
        [MaxLength(200)]


        public string Img { get; set; }
        [MaxLength(200)]
        public string Name { get; set; }
        [MaxLength(120)]

        public string Desc { get; set; }
        [MaxLength(120)]
        public string ButtonText { get; set; }
        public bool IsDeleted { get; set; }
        [NotMapped]
        public IFormFile images { get; set; }

      
    }
}
