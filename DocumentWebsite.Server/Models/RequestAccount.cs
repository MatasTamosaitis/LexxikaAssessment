using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace DocumentWebsite.Server.Models
{
    [ExcludeFromCodeCoverage]
    public class RequestAccount
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
