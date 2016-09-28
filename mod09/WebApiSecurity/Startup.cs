using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using WebApiSecurity.Providers;

[assembly: OwinStartup(typeof(WebApiSecurity.Startup))]

namespace WebApiSecurity
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //ConfigureAuth(app);


            var authorizationServerOptions = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true, // DO be carefull
                TokenEndpointPath = new PathString("/token"),
                Provider = new OAuthAuthorizationServerProvider()
                {
                    OnValidateClientAuthentication = ctx =>
                    {
                        ctx.Validated();
                        return Task.FromResult(0);
                    },

                    OnGrantResourceOwnerCredentials = ctx =>
                    {
                        if (ctx.UserName == "maurice" && ctx.Password == "secret")
                        {
                var identity = new ClaimsIdentity(
                    new [] {new Claim(ClaimTypes.Name, ctx.UserName), },
                    "password");
                ctx.Validated(identity);

                        }
                        return Task.FromResult(0);
                    },
                }
            };

            app.UseOAuthAuthorizationServer(authorizationServerOptions);

            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
        }
    }
}
