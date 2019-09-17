///<reference path="pessoa.ts" />
///<reference path="paciente.ts" />
///<reference path="funcionario.ts" />
///<reference path="medico.ts" />
///<reference path="enfermeiro.ts" />
///<reference path="hospital.ts" />

namespace hospital{
    //Instanciando hospital;
    let hospital = new Hospital();
    hospital.setNome("hospital juju");
    
    let medico1 = new Medico();
    medico1.setCrm(1000);
    medico1.setEspecialidade(2);
    medico1.setNome("Juliana");
    medico1.setCpf("600.022.133-20");
    medico1.setCodFuncionario(1);

    let medico2 = new Medico();
    medico2.setCrm(2511);
    medico2.setEspecialidade(1);
    medico2.setNome("Manuela");
    medico2.setCpf("056.012.099-15");
    medico2.setCodFuncionario(2);

    let medico3 = new Medico();
    medico3.setCrm(1164);
    medico3.setEspecialidade(3);
    medico3.setNome("Eduardo");
    medico3.setCpf("125.254.263-25");
    medico3.setCodFuncionario(3);

    let enfermeiro1 = new Enfermeiro();
    enfermeiro1.setCoren(1251);
    enfermeiro1.setNome("Denise");
    enfermeiro1.setCpf("210.263.802-25");
    enfermeiro1.setCodFuncionario(4);

    let enfermeiro2 = new Enfermeiro();
    enfermeiro2.setCoren(2603);
    enfermeiro2.setNome("Bruna");
    enfermeiro2.setCpf("097.120.356-45");
    enfermeiro2.setCodFuncionario(5);

    let enfermeiro3 = new Enfermeiro();
    enfermeiro3.setCoren(1164);
    enfermeiro3.setNome("Eliene");
    enfermeiro3.setCpf("320.136.674-12");
    enfermeiro3.setCodFuncionario(6);


    let paciente1 = new Paciente();
    paciente1.setCodPaciente(1);
    paciente1.setNome("Gabriel");
    paciente1.setCpf("485.141.210-58");

    let paciente2 = new Paciente();
    paciente2.setCodPaciente(2);
    paciente2.setNome("Davi");
    paciente2.setCpf("230.586.145-80");

    let paciente3 = new Paciente();
    paciente3.setCodPaciente(3);
    paciente3.setNome("Rafael");
    paciente3.setCpf("514.814.478-12");


    hospital.addMedicos(medico1);
    hospital.addMedicos(medico2);
    hospital.addMedicos(medico3);

    hospital.addEnfermeiros(enfermeiro1);
    hospital.addEnfermeiros(enfermeiro2);
    hospital.addEnfermeiros(enfermeiro3);

    hospital.addPacientes(paciente1);
    hospital.addPacientes(paciente2);
    hospital.addPacientes(paciente3);


    let tabela_medico = document.getElementById("medico");
    
    let conteudo = "Medicos: <tr> <td>Nome</td> <td>CPF</td> <td>Código Funcionário</td> <td>CRM</td> <td>Especialidade</td> </tr>"
    
    hospital.getMedicos().forEach(element => {
        conteudo += "<tr> <td>"+element.getNome()+"</td> <td>"+element.getCpf()+"</td> <td>"+element.getCodFuncionario()+"</td> <td>"+element.getCrm()+"</td> <td>"+element.getEspecialidade()+"</td> </tr>"
    });

    tabela_medico.innerHTML = conteudo;
   
    let tabela_enfermeiro = document.getElementById("enfermeiro");

    let conteudo2 = "Enfermeiros: <tr> <td>Nome</td> <td>CPF</td> <td>Código Funcionário</td> <td>Coren</td> </tr>"
    
    hospital.getEnfermeiros().forEach(element => {
        conteudo2 += "<tr> <td>"+element.getNome()+"</td> <td>"+element.getCpf()+"</td> <td>"+element.getCodFuncionario()+"</td> <td>"+element.getCoren()+"</td> </tr>"
    });

    tabela_enfermeiro.innerHTML = conteudo2;

    let tabela_paciente = document.getElementById("paciente");

    let conteudo3 = "Pacientes: <tr> <td>Nome</td> <td>CPF</td>  </tr>"
    
    hospital.getPaciente().forEach(element => {
        conteudo3 += "<tr> <td>"+element.getNome()+"</td> <td>"+element.getCpf()+"</td> <td>"+element.getCodPaciente()+"</td> </tr>"
    });

    tabela_paciente.innerHTML = conteudo3;
}