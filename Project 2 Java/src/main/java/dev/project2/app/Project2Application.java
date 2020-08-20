package dev.project2.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("dev.project2") // Spring will find classes labeled with  @component
@EntityScan("dev.project2.entities")// Spring data can find entities labeled with @entity
@EnableJpaRepositories("dev.project2.repos")// Spring data can find the repositories with @Repository
public class Project2Application {

	public static void main(String[] args) {
		SpringApplication.run(Project2Application.class, args);
	}

}
