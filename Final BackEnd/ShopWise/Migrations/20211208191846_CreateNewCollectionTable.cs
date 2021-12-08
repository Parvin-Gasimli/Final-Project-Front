using Microsoft.EntityFrameworkCore.Migrations;

namespace ShopWise.Migrations
{
    public partial class CreateNewCollectionTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NewCollections",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Img = table.Column<string>(maxLength: 200, nullable: true),
                    Name = table.Column<string>(maxLength: 200, nullable: true),
                    Desc = table.Column<string>(maxLength: 120, nullable: true),
                    ButtonText = table.Column<string>(maxLength: 120, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewCollections", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NewCollections");
        }
    }
}
