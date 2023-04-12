using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using backend.Services;

namespace backend.Controllers
{

    [Route("api/[controller]")]
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
        public async Task<ActionResult<Models.User>> Register(Models.UserDto request)
        {
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            Models.User user = new Models.User()
            {
                Id = request.Id,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                Name = request.Name,
                Lastname = request.Lastname,
                Email = request.Email,
                Phone = request.Phone,
            };

            if (!_service.IsExist(user.Id).Result)
                await _service.CreateAsync(user);
            else
                return BadRequest("This user is already registed.");

            return Ok(user.Id);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(Models.UserDto request)
        {
            var user = _service.GetAsync(request.Id);
            if (user == null)
                return BadRequest("User not found.");

            if (!VertifyPasswordHash(request.Password, user.Result.PasswordHash, user.Result.PasswordSalt))
                return BadRequest("Wrong password.");

            return Ok("Login successful.");
        }

        //     private string CreateToken(Models.User user)
        //     {
        //         List<Claim> claims = new List<Claim>{
        //             new Claim(ClaimTypes.Name, user.Id)
        //         };

        //         var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

        //         var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        //         var token = new JwtSecurityToken(
        //             claims: claims,
        //             expires: DateTime.Now.AddDays(1),
        //             signingCredentials: cred
        //         );

        //         var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        //         return jwt;
        //     }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VertifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }

        }
    }
}