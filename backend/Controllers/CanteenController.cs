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

    [HttpPost("register")]
    public async Task<ActionResult<Models.Canteen>> Register(Models.Canteen request)
    {
        List<Models.Canteen> canteens = await _service.GetCanteens();

        canteens.Add(request);

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