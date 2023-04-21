namespace backend.Models;

public class MenuTask
{
    public string Id { get; set; } = string.Empty;
    public string UserId { get; set; } = string.Empty;
    public string Store { get; set; } = string.Empty;
    public Models.Menu Menu { get; set; } = new Models.Menu();
    public int Amount { get; set; } = 0;
    public bool IsConfirm { get; set; } = false;
    public string Comment { get; set; } = string.Empty;

}