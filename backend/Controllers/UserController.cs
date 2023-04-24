using Microsoft.AspNetCore.Mvc;
using backend.Services;

namespace backend.Controllers;


[Route("[controller]")]
[ApiController]
public class UserController : ControllerBase
{

    private readonly IConfiguration _configuration;
    private readonly DatabaseService _service;

    public UserController(IConfiguration configuration, DatabaseService service)
    {
        _configuration = configuration;
        _service = service;
    }

    [HttpGet("getUser")]
    public async Task<ActionResult<Models.UserLogin>> GetUser(string id)
    {
        var user = await _service.GetUserId(id);

        if (user == null)
            return BadRequest("User Not Found.");

        var usage = new Models.Usage()
        {
            Id = user.Id,
            Name = user.Name,
            Lastname = user.Lastname,
            Phone = user.Phone,
        };

        return Ok(usage);
    }

}