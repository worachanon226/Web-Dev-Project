using Microsoft.AspNetCore.Mvc;
using backend.Services;

namespace backend.Controllers;


[Route("[controller]")]
[ApiController]
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
        return Ok(task);
    }

    [HttpPost("setAvailable")]
    public async Task<ActionResult> SetAvailableTask(string id, bool b)
    {
        await _service.SetTaskAvailable(id, b);
        return Ok("Task is set " + b + ".");
    }

    [HttpPost("addMenu")]
    public async Task<ActionResult> AddMenu(string id, Models.MenuTask menu)
    {
        await _service.AddMenu(id, menu);
        return Ok("Menu is already added.");
    }

    [HttpGet("getTask")]
    public async Task<ActionResult<Models.Task>> GetTask(string id)
    {
        var task = await _service.GetTask(id);
        return Ok(task);
    }

    [HttpGet("getTasks")]
    public async Task<ActionResult<List<Models.Task>>> GetTasks()
    {
        List<Models.Task> tasks = await _service.GetTasks();
        return Ok(tasks);
    }

    [HttpDelete("deleteMenu")]
    public async Task<ActionResult> DeleteMenu(string TaskId, string MenuId)
    {
        await _service.DeleteMenu(TaskId, MenuId);
        return Ok("Deleted.");
    }

}