using DocumentWebsite.Server.Interfaces;
using DocumentWebsite.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace DocumentWebsite.Server.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController(IAccountService accountService) : Controller
    {
        [HttpPost("getaccount")]
        public IActionResult GetAccount([FromBody] RequestAccount requestAccount)
        {
            var account = accountService.GetAccount(requestAccount.Email, requestAccount.Password);

            if(account == null)
            {
                Unauthorized(new { Message = "Invalid credentials" });
            }

            return Ok(new { Message = "Login successful!" });
        }

    }
}
