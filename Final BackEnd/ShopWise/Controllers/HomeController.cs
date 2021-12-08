using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ShopWise.DAL;
using ShopWise.Models;
using ShopWise.ViewModels;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace ShopWise.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;
        public HomeController(AppDbContext context)
        {
            _context = context;
                
        }
      
        public async Task<IActionResult> Index()
        {


            HomeVM homeVM = new HomeVM()
            {
                Sliders = await _context.Sliders.Where(x=>x.IsDeleted==false).ToListAsync(),
                NewCollections=await _context.NewCollections.Where(x => x.IsDeleted == false).ToListAsync()
            
            };
            return View(homeVM);
        }

       
    }
}
