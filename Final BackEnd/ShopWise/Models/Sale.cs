using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShopWise.Models
{
    public class Sale
    {
        public int Id { get; set; }
        [MaxLength(255)]
        public string Img { get; set; }
        public bool IsDeleted { get; set; }
        [NotMapped]
        public IFormFile Images { get; set; }
    }
}
