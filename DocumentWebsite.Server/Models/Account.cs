using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace DocumentWebsite.Server.Models
{
    [ExcludeFromCodeCoverage]
    public class Account
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public bool IsAdmin { get; set; }
    }
}
