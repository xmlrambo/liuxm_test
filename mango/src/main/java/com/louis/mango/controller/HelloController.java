package com.louis.mango.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    //http://localhost:8001/hello
    @GetMapping(value = "/hello")
    public Object hello(){
        return "Hello Mango!";
    }
}
