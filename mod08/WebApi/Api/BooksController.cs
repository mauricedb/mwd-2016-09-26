using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Api
{
    public class BooksController: ApiController
    {

        private IBooksRepository _repo;

        public BooksController():this(new BooksRepository())
        {
        }

        public BooksController(IBooksRepository repo)
        {
            _repo = repo;
        }

        //public Task<IEnumerable<Book>>  Get()
        //{
        //    return _repo.GetBooks();
        //}

        public async Task<IEnumerable<Book>> Get()
        {
            var books = await _repo.GetBooks();

            return books;
        }

        public Task<Book> Get(int id)
        {
            return _repo.GetBook(id);
        }
    }
}