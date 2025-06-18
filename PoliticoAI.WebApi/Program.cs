using PoliticoAI.WebApi;
using PoliticoAI.DAL;
using Microsoft.AspNetCore.Authentication.Negotiate;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<FuguContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("FuguContext")).EnableDetailedErrors());

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthentication(NegotiateDefaults.AuthenticationScheme)
   .AddNegotiate();

builder.Services.AddAuthorization(options =>
{
    // By default, all incoming requests will be authorized according to the default policy.
    options.FallbackPolicy = options.DefaultPolicy;
});

var corsPolicyName = "FrontEndCORSPolicy";

builder.Services.AddCors(options =>
{
    options.AddPolicy(corsPolicyName, policy =>
    {
        policy.WithOrigins("http://localhost:3000");
        policy.WithOrigins("http://localhost:5173");
        policy.WithOrigins("http://localhost:8090");
        policy.WithOrigins("https://localhost:3000");
        policy.WithOrigins("https://localhost:5173");
        policy.WithOrigins("https://localhost:8090");
        policy.WithOrigins("http://itflo-vglobaldev01:8090");
        policy.WithOrigins("https://itflo-vglobaldev01:8090");
        policy.WithMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
        policy.AllowAnyHeader();
        policy.AllowCredentials();
    });
});
builder.Services.AddHttpClient();

builder.Services.AddOptions<PoliticoAISettings>().Bind(builder.Configuration.GetSection("Fugu"));

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
