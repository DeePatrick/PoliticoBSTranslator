using Microsoft.EntityFrameworkCore;

namespace PoliticoAI.DAL
{
    public class FuguContext(DbContextOptions<FuguContext> options) : DbContext(options)
    {
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(FuguContext).Assembly);
        }
    }
}
