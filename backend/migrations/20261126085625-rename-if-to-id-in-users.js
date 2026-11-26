"use strict";

export async function up(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
        "users",
        "if",
        "id"
    );
}

export async function down(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
        "users",
        "id",
        "if"
    );
}