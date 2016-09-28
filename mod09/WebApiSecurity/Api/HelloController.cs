using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApiSecurity.Api
{
    [Authorize]
    public class HelloController : ApiController
    {
        public Book Get()
        {
            return new Book
            {
                Id = 1,
                Title = "The Ultimate Hitchhiker's Guide to the Galaxy",
                Author = "Douglas Adams",
                ImageName = "TheUltimateHitchhikersGuide.jpg",
            };
        }
    }

    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string ImageName { get; set; }
    }
}
