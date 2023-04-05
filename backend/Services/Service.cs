using MongoDB.Driver;

namespace backend.Services;

public class DatabaseService
{
    private readonly IMongoCollection<Models.User>? _userCollection;

    public DatabaseService()
    {
        var mongoClient = new MongoClient("mongodb+srv://64010755:g0UR8mXdbJCShDKQ@cluster0.z3qrjsw.mongodb.net/?retryWrites=true&w=majority");
        var mongoDatabase = mongoClient.GetDatabase("CollectionApi");
        _userCollection = mongoDatabase.GetCollection<Models.User>("Users");
    }

    public async Task<bool> IsExist(string id) =>
        await _userCollection.Find(x => x.Id == id).AnyAsync();


    public async Task<List<Models.User>> GetAsync() =>
        await _userCollection.Find(_ => true).ToListAsync();

    public async Task<Models.User> GetAsync(string id) =>
        await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Models.User? newUser) =>
        await _userCollection.InsertOneAsync(newUser);
}