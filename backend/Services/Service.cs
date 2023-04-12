using MongoDB.Driver;

namespace backend.Services;

public class DatabaseService
{
    private readonly IMongoCollection<Models.User>? _userCollection;
    private readonly IMongoCollection<Models.Canteen>? _canteenCollection;

    public DatabaseService()
    {
        var mongoClient = new MongoClient("mongodb+srv://64010755:g0UR8mXdbJCShDKQ@cluster0.z3qrjsw.mongodb.net/?retryWrites=true&w=majority");
        var mongoDatabase = mongoClient.GetDatabase("CollectionApi");

        _userCollection = mongoDatabase.GetCollection<Models.User>("Users");
        _canteenCollection = mongoDatabase.GetCollection<Models.Canteen>("Canteens");
    }

    public async Task<bool> IsExist(string id) =>
        await _userCollection.Find(x => x.Id == id).AnyAsync();

    public async Task<List<Models.User>> GetAsync() =>
        await _userCollection.Find(_ => true).ToListAsync();

    public async Task<ReplaceOneResult> UpdateCanteen(string name, Models.Canteen newCanteen) =>
        await _canteenCollection.ReplaceOneAsync(x => x.Name == name, newCanteen);

    public async Task<Models.User> GetAsync(string id) =>
        await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task<Models.Canteen> GetCanteenAsync(string name) =>
        await _canteenCollection.Find(x => x.Name == name).FirstOrDefaultAsync();

    public async Task<bool> IsCanteenExist(string name) =>
        await _canteenCollection.Find(x => x.Name == name).AnyAsync();

    public async Task CreateAsync(Models.User? newUser) =>
        await _userCollection.InsertOneAsync(newUser);

    public async Task CreateAsync(Models.Canteen? newCanteen) =>
        await _canteenCollection.InsertOneAsync(newCanteen);

    public async Task<List<Models.Canteen>> GetCanteens() =>
        await _canteenCollection.Find(_ => true).ToListAsync();
}