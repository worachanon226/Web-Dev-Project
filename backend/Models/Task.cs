namespace backend.Models;

public class Task
{
    public string Id { get; set; } = string.Empty;
    public string UserId { get; set; } = string.Empty;
    public string Canteen { get; set; } = string.Empty;
    public List<Models.MenuTask> Menus { get; set; } = new List<Models.MenuTask>();
    public int MaxTasks { get; set; } = 0;
    public int CurrentTasks { get; set; } = 0;
    public bool Available { get; set; } = true;
    public int TotalPrice { get; set; } = 0;
}