namespace backend.Models;

public class MenuTask
{
    public string Id { get; set; } = string.Empty;
    public string UserId { get; set; } = string.Empty;
    public string Store { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public int Price { get; set; } = 0;
    public int Amount { get; set; } = 0;
    public bool IsConfirm { get; set; } = false;
    public string Comment { get; set; } = string.Empty;

}