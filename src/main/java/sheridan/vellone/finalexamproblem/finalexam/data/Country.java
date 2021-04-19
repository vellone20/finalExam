package sheridan.vellone.finalexamproblem.finalexam.data;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;

@Entity
@Table(name = "country")
@Data
public class Country implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id = 0;

    @NotBlank
    @Size(max = 50)
    @Pattern(regexp = "[A-Za-z]*")
    private String name = "";

    @NotBlank
    @Pattern(regexp = "(Asia | Africa | Antarctica | Europe | North America | Oceania | South America)?")
    private String continent = "";

    @NotBlank
    @Size(max = 30)
    @Pattern(regexp = "[A-Za-z]*")
    private String region = "";

    @NotBlank
    @Size(max = 10)
    private float surface_area = 0.0f;

    @NotBlank
    @Size(max = 30)
    private int population = 0;
}