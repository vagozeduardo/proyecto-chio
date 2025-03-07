package com.sistem.xd.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistem.xd.Model.tabla_registro;

@Repository
public interface Repositori extends JpaRepository <tabla_registro,Integer>{

}
