using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Services;

public class DatabaseService
{
    private readonly IMongoCollection<Models.User> _userCollection;
    private readonly IMongoCollection<Models.Canteen> _canteenCollection;
    private readonly IMongoCollection<Models.Task> _taskCollection;

    public DatabaseService()
    {
        var mongoClient = new MongoClient("mongodb+srv://64010755:g0UR8mXdbJCShDKQ@cluster0.z3qrjsw.mongodb.net/?retryWrites=true&w=majority");
        var mongoDatabase = mongoClient.GetDatabase("CollectionApi");

        _userCollection = mongoDatabase.GetCollection<Models.User>("Users");
        _canteenCollection = mongoDatabase.GetCollection<Models.Canteen>("Canteens");
        _taskCollection = mongoDatabase.GetCollection<Models.Task>("Tasks");
    }

    public async Task<bool> IsExist(string id) =>
        await _userCollection.Find(x => x.Id == id).AnyAsync();


    //User Service
    public async Task<List<Models.User>> GetUsers() =>
        await _userCollection.Find(_ => true).ToListAsync();
    public async Task<Models.User> GetUserId(string id) =>
        await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task CreateAsync(Models.User newUser) =>
        await _userCollection.InsertOneAsync(newUser);

    //Canteen Controller
    public async Task<ReplaceOneResult> UpdateCanteen(string name, Models.Canteen newCanteen) =>
        await _canteenCollection.ReplaceOneAsync(x => x.Name == name, newCanteen);
    public async Task<bool> IsCanteenExist(string name) =>
        await _canteenCollection.Find(x => x.Name == name).AnyAsync();
    public async Task CreateAsync(Models.Canteen newCanteen) =>
        await _canteenCollection.InsertOneAsync(newCanteen);
    public async Task<List<Models.Canteen>> GetCanteens() =>
        await _canteenCollection.Find(_ => true).ToListAsync();
    public async Task<Models.Canteen> GetCanteenAsync(string name) =>
        await _canteenCollection.Find(x => x.Name == name).FirstOrDefaultAsync();

    //Task Contoller
    public async Task<Models.Task> GetTask(string id) =>
        await _taskCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task<List<Models.Task>> GetTasks() =>
        await _taskCollection.Find(x => x.Available == true).ToListAsync();
    public async Task CreateTask(Models.Task newTask) =>
        await _taskCollection.InsertOneAsync(newTask);
    public async Task SetTaskAvailable(string id, bool b)
    {
        var filter = Builders<Models.Task>.Filter.Eq(x => x.Id, id);
        var update = Builders<Models.Task>.Update.Set(x => x.Available, b);
        await _taskCollection.UpdateOneAsync(filter, update);
    }
    public async Task AddMenu(string id, Models.MenuTask menu)
    {
        var task = await _taskCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        if (task != null)
        {
            task.Menus.Add(menu);
        }

        await _taskCollection.ReplaceOneAsync(x => x.Id == id, task);
    }
}