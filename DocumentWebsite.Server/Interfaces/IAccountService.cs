using DocumentWebsite.Server.Models;

namespace DocumentWebsite.Server.Interfaces
{
    public interface IAccountService
    {
        Account GetAccount(string userName, string password);
    }
}
