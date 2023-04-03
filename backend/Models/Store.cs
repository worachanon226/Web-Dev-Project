namespace backend.Models;

public class Store
{
    public string? Id { get; set; }
    public string? Name { get; set; }
    public List<Models.Menu>? Menus { get; set; }

}