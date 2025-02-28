import Sequelize, { Model } from "sequelize";

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                admin: Sequelize.BOOLEAN,
            },
            {
                sequelize,
                timestamps: true,  // 🔥 Adiciona os campos createdAt e updatedAt
                underscored: true, // 🔥 Faz com que os nomes fiquem em snake_case (created_at)
            },
        );
    }
}

export default User;
