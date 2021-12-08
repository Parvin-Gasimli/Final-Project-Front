using Microsoft.EntityFrameworkCore.Migrations;

namespace ShopWise.Migrations
{
    public partial class CreateNewCollectionTable_2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "NewCollections",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "NewCollections");
        }
    }
}
