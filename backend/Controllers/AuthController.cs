using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using backend.Services;

namespace backend.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        private readonly DatabaseService _service;

        public AuthController(IConfiguration configuration, DatabaseService service)
        {
            _configuration = configuration;
            _service = service;
        }

        [HttpPost("register")]
        public async Task<ActionResult<Models.User>> Register(Models.UserRegister request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            Models.User user = new Models.User()
            {
                Id = request.Id,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                Name = request.Name,
                Lastname = request.Lastname,
                Phone = request.Phone,
            };

            if (!_service.IsExist(user.Id).Result)
                await _service.CreateAsync(user);
            else
                return BadRequest("This user is already registed.");

            return Ok("Registed Successful.");
        }

        [HttpPost("login")]
        public async Task<ActionResult<Models.User>> Login(Models.UserLogin request)
        {
            var user = await _service.GetUserId(request.Id);
            if (user == null)
                return BadRequest("User not found.");

            if (!VertifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
                return BadRequest("Wrong password.");

            var usage = new Models.Usage()
            {
                Id = user.Id,
                Name = user.Name,
                Lastname = user.Lastname,
                Phone = user.Phone,
            };

            return Ok(usage);
        }

        [HttpGet("")]
        public ActionResult Test()
        {
            return Ok("200");
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VertifyPasswordHash(string password, byte[]? passwordHash, byte[]? passwordSalt)
        {
            if (passwordHash == null || passwordSalt == null)
                return false;

            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }

        }
    }
}