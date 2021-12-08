using Microsoft.EntityFrameworkCore;
using ShopWise.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopWise.DAL
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Slider> Sliders { get; set; }
        public DbSet<NewCollection> NewCollections { get; set; }
        public DbSet<Sales> Sales { get; set; }
        

    }
}
