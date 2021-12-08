using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShopWise.Models
{
    public class Slider
    {
        public int Id { get; set; }

        [MaxLength(250)]
        public string Image { get; set; }

        [MaxLength(200)]
        public string Desc { get; set; }

        [MaxLength(250)]
        public string Title { get; set; }
        [MaxLength(100)]
        public string ButtonText { get; set; }
        public bool IsDeleted { get; set; }

        [NotMapped]
        public IFormFile ImageFile { get; set; }
    }
}
