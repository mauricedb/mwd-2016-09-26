using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Api
{
    public class BooksController : ApiController
    {
        IBooksRepository _repository = new BooksRepository();

        public Task<IEnumerable<Book>> Get()
        {
            return _repository.GetBooks();
        }

        public Task<Book> Get(int id)
        {
            return _repository.GetBook(id);
        }
    }
}
