/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jsonbuilders;

import entity.Reader;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

/**
 *
 * @author teacher
 */
public class ReaderJsonBuilder {
    public JsonObject getReaderJson(Reader reader){
        JsonObjectBuilder job = Json.createObjectBuilder();
        job.add("id", reader.getId());
        job.add("firstname", reader.getFirstname());
        job.add("lastname", reader.getLastname());
        job.add("phone", reader.getPhone());
        job.add("money", reader.getMoney());
        return job.build();
    }
}
