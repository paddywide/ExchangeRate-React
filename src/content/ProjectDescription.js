export const projectDescriptionContent = `
This solution is conposited by 2 repos:
https://github.com/paddywide/ExchangeServiceAPI
https://github.com/paddywide/ExchangeRate-React

To the API, it uses below design and tech:
Architecture and pattern: 
clean Architecture, Result Pattern, Domain event, Aggregate, Repository Pattern, Primitive and Value Object

.Net Core:
Code first, HttpClient

Security:
JWT

Nuget:
Exception middleware, MediatR, fluentValidation, Mapper

DB:
SQLite


It has been deployed to AWS EC2. It use Nginx as reverse proxy and docker to run the app.
`;