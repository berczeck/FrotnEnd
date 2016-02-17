using System.Web.Mvc;

namespace HelloWorld.Controllers
{
    public class RootController : Controller
    {
        [ActionName("Search")]
        // GET: Root
        public ActionResult Index()
        {
            return View();
        }
    }
}