using Microsoft.AspNetCore.Mvc;
using backend.Services;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly DatabaseService _service;
    public UserController(DatabaseService service) => _service = service;

    [HttpGet]
    public async Task<List<Models.User>> Get() =>
       await _service.GetAsync();

    [HttpPost]
    public async Task<IActionResult> Post(Models.User newUser)
    {
        var isFound = await _service.GetAsync(newUser.Id);
        Console.WriteLine(isFound);

        if (isFound == null)
            await _service.CreateAsync(newUser);

        return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
    }
}