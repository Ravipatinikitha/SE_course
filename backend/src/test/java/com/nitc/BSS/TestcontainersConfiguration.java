package com.nitc.BSS;

import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.utility.DockerImageName;

@TestConfiguration
public class TestcontainersConfiguration {

    @Bean
    public MySQLContainer<?> mysqlContainer() {
        MySQLContainer<?> mysql = new MySQLContainer<>(DockerImageName.parse("mysql:latest"))
                .withDatabaseName("bss_db")
                .withUsername("root")
                .withPassword("password");
        mysql.start();
        return mysql;
    }
}
