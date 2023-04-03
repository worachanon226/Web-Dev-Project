namespace backend.Models;

public class Canteen
{
    public string? Id { get; set; }
    public string? Name { get; set; }
    public List<Models.Store>? Stores { get; set; }
}