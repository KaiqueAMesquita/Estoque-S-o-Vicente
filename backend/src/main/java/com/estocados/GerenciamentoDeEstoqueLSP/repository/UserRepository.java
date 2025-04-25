package com.estocados.GerenciamentoDeEstoqueLSP.repository;

import com.estocados.GerenciamentoDeEstoqueLSP.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
