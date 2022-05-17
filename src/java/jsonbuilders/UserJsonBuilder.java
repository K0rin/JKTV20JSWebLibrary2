/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jsonbuilders;

import entity.User;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

/**
 *
 * @author teacher
 */
public class UserJsonBuilder {
    public JsonObject getUserJson(User user){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", user.getId());
        job.add("login", user.getLogin());
        job.add("reader", new ReaderJsonBuilder().getReaderJson(user.getReader()));
        return job.build();
    }
}
