using DocumentWebsite.Server.Interfaces;
using DocumentWebsite.Server.Models;

namespace DocumentWebsite.Server.Services
{
    public class AccountService : IAccountService
    {
        public static readonly List<Account> _accounts = new List<Account>
            {
                new Account
                {
                    UserName = "donald.trump@whitehouse.com",
                    Password = "password",
                    Name = "Donald Trump",
                    IsAdmin = false
                },
                new Account
                {
                    UserName = "elon.musk@doge.com",
                    Password = "password",
                    Name = "Elon Musk",
                    IsAdmin = true
                }
            };

        public Account GetAccount(string userName, string password)
        {
            var account = _accounts.Where(x => x.UserName == userName && x.Password == password).First();

            return account;
        }


    }
}
