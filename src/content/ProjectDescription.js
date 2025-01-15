export const projectDescriptionContent = `
This solution is conposited by 2 repos:
https://github.com/paddywide/ExchangeServiceAPI
https://github.com/paddywide/ExchangeRate-React

To the API, it uses below design and tech:
Architecture and pattern: 
Clean Architecture, Result Pattern, Domain event, Aggregate, Repository Pattern

.Net Core 8:
Primitive and Value Object, httpClientFactory

Security:
JWT, OAuth2.0

Nuget:
Exception middleware, MediatR, FluentValidation, AutoMapper

DB:
SQLite, Code first


It has been deployed to AWS EC2. It use Nginx as reverse proxy and docker to run the app.
To the authentication, it has Login, Register and Logout function. When user logout, it will save the token to the blacklist.
To the exchange rate, it uses httpClientFactory to get the exchange rate from the 3rd party API and save to the DB.
To react, it can display the login error which response from api, try to enter a different email to login.
`;