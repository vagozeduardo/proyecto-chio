package com.sistem.xd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistem.xd.Model.tabla_registro;
import com.sistem.xd.Repository.Repositori;

@RestController
@CrossOrigin("*")
@RequestMapping("/Usuario")
public class RegistroController {

    @Autowired
    public Repositori repositorio;

    @GetMapping(value = "/obtener")
    public List<tabla_registro> getUsuarios() {
        return repositorio.findAll() ;// devuelve a la intefaz(en posman en mi caso) los datos que encontro
    }

    @PostMapping(value = "/registro")
    public String savetask(@RequestBody tabla_registro tabla_registro){ // el "@RequestBody Task task" es los datos que pasaron en task en donde se puede validar los datos (eso entendi)
        repositorio.save(tabla_registro); //guarda lo que consiguio de la interfaz
        return "b_registro"; //manda mensaje
    }

}
