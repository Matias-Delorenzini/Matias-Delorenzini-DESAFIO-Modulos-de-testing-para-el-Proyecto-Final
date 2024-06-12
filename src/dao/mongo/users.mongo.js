import UsersModel from '../models/users.schema.js';

class Users {
    post = async(user) => {
        try {
            const newUser = new UsersModel(user);
            const savedUser = await newUser.save();
            return savedUser;
        } catch (error) {
            throw error;
        }
    }

    getOne = async(email) => {
        try {
            const user = await UsersModel.findOne({ email });
            return user;
        } catch (error) {
            throw error;
        }
    }

    putPassword = async (email, newPasswordHashed) => {
        try {
          const user = await UsersModel.findOne({ email });
      
          user.password = newPasswordHashed;
          await user.save();
      
          return { message: 'Password updated successfully' };
        } catch (error) {
          throw error;
        }
    }

    putRole = async (email, newRole) => {
        try {
          const user = await UsersModel.findOne({ email });
          user.role = newRole;
          await user.save();
      
          return { message: 'Role updated successfully' };
        } catch (error) {
          throw error;
        }
    }

    delete = async (email) => {
        try {
            const result = await UsersModel.findOneAndDelete({ email: email });
            if (!result) {
                console.log(`No se encontró el usuario con email ${email} así que no se eliminó`);
            }
            return { message: `Usuario con el email ${email} eliminado correctamente` };
        } catch (error) {
            throw error;
        }
    }
    
}

export default Users;