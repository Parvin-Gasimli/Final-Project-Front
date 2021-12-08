using ShopWise.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopWise.ViewModels
{
    public class HomeVM
    {
        public List<Slider> Sliders { get; set; }
        public List<NewCollection> NewCollections { get; set; }
    }
}
