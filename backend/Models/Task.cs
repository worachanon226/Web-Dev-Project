namespace backend.Models;

public class Task
{
    public string? Id { get; set; }
    public string? UserId { get; set; }
    public string? Canteen { get; set; }
    public string? Store { get; set; }
    public int MaxTasks { get; set; }
    public int CurrentTasks { get; set; }
    public bool Available { get; set; }
    public int TotalPrice { get; set; }
}