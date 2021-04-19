package sheridan.vellone.finalexamproblem.finalexam.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactDataRepository extends JpaRepository<Country, Integer> {
}