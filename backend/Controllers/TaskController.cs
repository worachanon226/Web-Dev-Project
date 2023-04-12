using Microsoft.AspNetCore.Mvc;
using backend.Services;

namespace backend.Controllers;

public class TaskController : ControllerBase
{

    private readonly IConfiguration _configuration;
    private readonly DatabaseService _service;

    public TaskController(IConfiguration configuration, DatabaseService service)
    {
        _configuration = configuration;
        _service = service;
    }

    [HttpPost("create")]
    public async Task<ActionResult<Models.Task>> Create(Models.Task request)
    {
        Models.Task task = new Models.Task()
        {
            Id = request.Id,
            UserId = request.UserId,
            Canteen = request.Canteen,
            Menus = new List<Models.MenuTask>(),
            MaxTasks = request.MaxTasks,
            CurrentTasks = 0,
            Available = true,
            TotalPrice = 0,
        };

        await _service.CreateTask(task);
        return Ok("Task is created.");
    }

    [HttpPost("setAvailable")]
    public async Task<ActionResult> SetAvailableTask(string id, bool b)
    {
        await _service.SetTaskAvailable(id, b);
        return Ok("Task is set " + b + ".");
    }

}