namespace backend.Models;

public class Canteen
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public List<Models.Store>? Stores { get; set; }
}
public class Store
{
    public string? Id { get; set; }
    public string? Name { get; set; }
    public List<Models.Menu>? Menus { get; set; }

}

public class Menu
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public int Price { get; set; } = 0;
}