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
            time = DateTime.Now,
        };

        await _service.CreateTask(task);
        return Ok(task);
    }

    [HttpPost("update")]
    public async Task<ActionResult> Update(Models.Task request)
    {
        Models.Task task = new Models.Task()
        {
            UserId = request.UserId,
            Canteen = request.Canteen,
            Menus = new List<Models.MenuTask>(),
            MaxTasks = request.MaxTasks,
            CurrentTasks = 0,
            Available = true,
            TotalPrice = 0,
            time = DateTime.Now,
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
    [HttpPost("setConfirmMenu")]
    public async Task<ActionResult> SetAvailableMenu(string TaskId, string MenuId, bool b)
    {
        await _service.SetMenuAvailable(TaskId, MenuId, b);
        return Ok("Menu is set to " + b + ".");
    }

    [HttpPost("addMenu")]
    public async Task<ActionResult> AddMenu(string id, Models.MenuTask menu)
    {
        var task = await _service.GetTask(id);
        if (task.CurrentTasks < task.MaxTasks)
        {
            task.CurrentTasks += 1;
            await _service.SetTaskCount(id, task.CurrentTasks);
            await _service.AddMenu(id, menu);
            return Ok("Menu is already added.");
        }

        await _service.SetTaskAvailable(id, false);
        return Ok("Task's full");

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
        for (int i = 0; i < tasks.Count; i++)
        {
            var diff = DateTime.Now - tasks[i].time;
            if (diff.Hours >= 1)
                tasks.Remove(tasks[i]);
        }
        return Ok(tasks);
    }

    [HttpGet("getAllTasks")]
    public async Task<ActionResult<List<Models.Task>>> GetAllTasks()
    {
        List<Models.Task> tasks = await _service.GetTasks();
        return Ok(tasks);
    }

    [HttpGet("getTasksExceptID")]
    public async Task<ActionResult<List<Models.Task>>> GetTasksExceptID(string userID)
    {
        List<Models.Task> tasks = await _service.GetTasks();

        for (int i = 0; i < tasks.Count; i++)
            if (tasks[i].UserId == userID)
                tasks.Remove(tasks[i]);

        return Ok(tasks);
    }

    [HttpGet("getMenusTask")]
    public async Task<ActionResult<List<Models.MenuTask>>> GetMenusTask(string id)
    {
        List<Models.MenuTask> menus = await _service.GetMenusTask(id);
        return Ok(menus);
    }

    [HttpDelete("deleteMenu")]
    public async Task<ActionResult> DeleteMenu(string TaskId, string MenuId)
    {
        var task = await _service.GetTask(TaskId);
        if (task.CurrentTasks > 0)
        {
            await _service.SetTaskAvailable(TaskId, true);
            await _service.DeleteMenu(TaskId, MenuId);
            task.CurrentTasks -= 1;
            await _service.SetTaskCount(TaskId, task.CurrentTasks);
            return Ok("Menu is deleted.");
        }
        return Ok("Don't have any menu in Task.");
    }

    [HttpDelete("deleteTask")]
    public ActionResult DeleteTask(string id)
    {
        var st = _service.DeleteTask(id);
        if (!st)
            return BadRequest("ID's invalid.");
        return Ok("Task is deleted.");
    }

}