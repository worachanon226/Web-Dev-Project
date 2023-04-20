namespace backend.Models;

public class MenuTask
{
    public string? Id { get; set; }
    public string? UserId { get; set; }
    public string? Store { get; set; }
    public Models.Menu? Menu { get; set; }
    public int Amount { get; set; }
    public bool IsConfirm { get; set; }
    public string? Comment { get; set; }

}