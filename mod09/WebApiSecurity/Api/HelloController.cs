﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApiSecurity.Api
{
    public class HelloController : ApiController
    {
        public string Get()
        {
            return "Hello there";
        }
    }
}