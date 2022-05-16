
import {loginModule} from './LoginModule.js';

class ViewModule{
    showLoginForm(){
        document.getElementById('content').innerHTML = 
            `<div class="card border-light my-5" style="width: 30rem;">
                <div class="card-body">
                  <legend>Авторизация</legend>
                  <div class="form-group mb-3">
                    <label for="login">Логин</label>
                    <input type="text" class="form-control" id="login" name="login" aria-describedby="login" placeholder="">
                    <small id="login_error" class="form-text text-muted d-none">Это поле не должно быть пустым</small>
                  </div>
                  <div class="form-group mb-3">
                    <labelpassword">Пароль</label>
                    <input type="password" class="form-control" id="password" name="password" aria-describedby="password" placeholder="">
                    <small id="password_error" class="form-text text-muted d-none">Это поле не должно быть пустым</small>
                  </div>
                  <button id="btn_login" type="submit" class="btn btn-primary mt-4">Войти</button>
                  <p class="text-info w-100 text-center my-3">Нет логина? <a href="showRegistration">Зарегистрироваться</a></p>
                </div>
            </div>`;
        document.getElementById('btn_login').addEventListener('click',e=>{
            loginModule.login();
        });
    }
}
const viewModule = new ViewModule();
export {viewModule};

