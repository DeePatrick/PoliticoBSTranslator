using PoliticoAI.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoliticoAI.DAL.Mappers
{
    public class FuguEntityMap : IEntityTypeConfiguration<FuguEntity>
    {
        public void Configure(EntityTypeBuilder<FuguEntity> builder)
        {
            builder.ToTable("Fugu");

            builder.HasKey(e => e.Id);

            builder.Property(e => e.Id).HasColumnName("Id");

            builder.Property(e => e.Name)
                .HasColumnName("Name")
                .IsUnicode()
                .HasMaxLength(255)
                .IsRequired();
        }
    }
}
