using Microsoft.AspNetCore.Mvc;
using backend.Services;

namespace backend.Controllers;


[Route("[controller]")]
[ApiController]
public class CanteenController : ControllerBase
{

    private readonly IConfiguration _configuration;
    private readonly DatabaseService _service;

    public CanteenController(IConfiguration configuration, DatabaseService service)
    {
        _configuration = configuration;
        _service = service;
    }


    Models.Canteen canteen1 = new Models.Canteen
    {
        Id = "001",
        Name = "Canteen1",

        Stores = new List<Models.Store>
        {
            new Models.Store
            {
                Id = "001",
                Name = "Store1",
                Menus = new List<Models.Menu>()
                {
                    new Models.Menu { Id = "001", Name = "Menu A", Price = 40 },
                    new Models.Menu { Id = "002", Name = "Menu B", Price = 45 }
                }
            },
            new Models.Store
            {
                Id = "002",
                Name = "Store2",
                Menus = new List<Models.Menu>()
                {
                    new Models.Menu { Id = "001", Name = "Menu A", Price = 40 },
                    new Models.Menu { Id = "002", Name = "Menu B", Price = 45 },
                    new Models.Menu { Id = "003", Name = "Menu C", Price = 50 }
                }
            }
        }
    };

    [HttpPost("register")]
    public async Task<ActionResult<Models.Canteen>> Register(Models.Canteen request)
    {
        List<Models.Canteen> canteens = new List<Models.Canteen>();

        canteens.Add(canteen1);

        for (var i = 0; i < canteens.Count; i++)
        {
            if (_service.IsCanteenExist(canteens[i].Name).Result)
                await _service.UpdateCanteen(canteens[i].Name, canteens[i]);
            else
                await _service.CreateAsync(canteens[i]);
        }

        return Ok("");
    }

    [HttpGet("getCanteensData")]
    public async Task<ActionResult<List<Models.Canteen>>> GetCanteensData()
    {
        List<Models.Canteen> canteens = await _service.GetCanteens();

        return Ok(canteens);
    }

}