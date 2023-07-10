
const  generateRandomIdUser = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= Math.random().toString(36).substring(0,num);
    return result1;
}


const response =(msg,code,res,status,data)=>{
return res.status(code).send({status:status,data,msg})
}


class staticVar {
    static USER_REGISTER_SUCCESSFUL="Usuario registrado exitosamente";
    static USER_REGISTER_EXIST= "El usuario ya se encuentra registrado";
    static USER_REGISTER_ERROR= "Error al registrar usuario";
    static USER_CREATE_ERROR="error method ==> createUserLogin"
    static USER_LOGIN_ERROR="Error: email o contraseña incorrectas";
    static USER_LOGOUT="cerrando sesión de usuario";
    static USER_LOGIN_ERROR_METHOD="error method ==> userLogin";
    static USER_LOGOUT_ERROR_METHOD="error method ==> userLogout";
    static USER_DELETED_SUCCESSFUL="Usuario eliminado exitosamente";
    static USER_DELETED_ERROR="Error: usuario no encontrado";
    static USER_DELETE_USER_ERROR_METHOD="error method ==> deleteUserLogin";
    static USER_UPDATE_SUCCESSFUL="Usuario actualizado exitosamente";
    static USER_UPDATE_ERROR="Error al actulizar el usuario";
    static USER_UPDATE_ERROR_METHOD="error method ==> updatePasswordUserLogin";
    static USER_UPDATE_AVATAR_SUCCESSFUL="Avatar actualizado exitosamente"
    static USER_UPDATE_AVATAR_ERROR="Error al actualizar la imagen Avatar"
    static USER_UPDATE_AVATAR_LOADING_ERROR="Error al cargar la imagen Avatar"
    static USER_UPDATE_AVATAR_ERROR_METHOD="error method ==> updateAvatarUserLogin"
}
module.exports = {staticVar,response, generateRandomIdUser};