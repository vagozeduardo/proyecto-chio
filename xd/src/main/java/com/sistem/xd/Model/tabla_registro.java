package com.sistem.xd.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "registro")
public class tabla_registro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idregistro;

    private String nombreUser;
    private String apellidoPA_User;
    private String apellidoMA_User;
    private String correoUser;
    private String contraseñaUser;
    
    public Integer getIdregistro() {
        return idregistro;
    }
    public void setIdregistro(Integer idregistro) {
        this.idregistro = idregistro;
    }
    public String getNombreUser() {
        return nombreUser;
    }
    public void setNombreUser(String nombreUser) {
        this.nombreUser = nombreUser;
    }
    public String getApellidoPA_User() {
        return apellidoPA_User;
    }
    public void setApellidoPA_User(String apellidoPA_User) {
        this.apellidoPA_User = apellidoPA_User;
    }
    public String getApellidoMA_User() {
        return apellidoMA_User;
    }
    public void setApellidoMA_User(String apellidoMA_User) {
        this.apellidoMA_User = apellidoMA_User;
    }
    public String getCorreoUser() {
        return correoUser;
    }
    public void setCorreoUser(String correoUser) {
        this.correoUser = correoUser;
    }
    public String getContraseñaUser() {
        return contraseñaUser;
    }
    public void setContraseñaUser(String contraseñaUser) {
        this.contraseñaUser = contraseñaUser;
    }

    

}
