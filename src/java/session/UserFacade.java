/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package session;

import entity.User;
import java.util.List;
import javafx.beans.property.SetProperty;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author teacher
 */
@Stateless
public class UserFacade extends AbstractFacade<User> {

    @PersistenceContext(unitName = "JKTV20jsWebLibraryPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public UserFacade() {
        super(User.class);
    }

    public User findByLogin(String login) {
        return (User) em.createQuery("SELECT u FROM User u WHERE u.login = :login")
                .setParameter("login", login)
                .getSingleResult();
    }
     public String getTopRole(User user) {
        List<String> listRoles = em.createQuery("SELECT ur.role.roleName FROM UserRoles ur WHERE ur.user=:user")
                .setParameter("user", user)
                .getResultList();
        if(listRoles.contains("ADMINISTRATOR")){
            return "ADMINISTRATOR";
        }else if(listRoles.contains("MANAGER")){
            return "MANAGER";
        }else if(listRoles.contains("READER")){
            return "READER";
        }else {
            return null;
        }
    }
}
