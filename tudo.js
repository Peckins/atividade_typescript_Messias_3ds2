var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hospital;
(function (hospital) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this._cpf = cpf;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        return Pessoa;
    }());
    hospital.Pessoa = Pessoa;
})(hospital || (hospital = {}));
///<reference path="pessoa.ts" />
var hospital;
(function (hospital) {
    var Funcionario = /** @class */ (function (_super) {
        __extends(Funcionario, _super);
        function Funcionario() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Funcionario.prototype.setCodFuncionario = function (codFuncionario) {
            this._codFuncionario = codFuncionario;
        };
        Funcionario.prototype.getCodFuncionario = function () {
            return this._codFuncionario;
        };
        return Funcionario;
    }(hospital.Pessoa));
    hospital.Funcionario = Funcionario;
})(hospital || (hospital = {}));
///<reference path="funcionario.ts" />
var hospital;
(function (hospital) {
    var Enfermeiro = /** @class */ (function (_super) {
        __extends(Enfermeiro, _super);
        function Enfermeiro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Enfermeiro.prototype.setCoren = function (coren) {
            this._coren = coren;
        };
        Enfermeiro.prototype.getCoren = function () {
            return this._coren;
        };
        return Enfermeiro;
    }(hospital.Funcionario));
    hospital.Enfermeiro = Enfermeiro;
})(hospital || (hospital = {}));
var hospital;
(function (hospital) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._pacientes = [];
        }
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.addEnfermeiros = function (enfermeiro) {
            this._enfermeiros.push(enfermeiro);
        };
        Hospital.prototype.getEnfermeiros = function () {
            return this._enfermeiros;
        };
        Hospital.prototype.addMedicos = function (medico) {
            this._medicos.push(medico);
        };
        Hospital.prototype.getMedicos = function () {
            return this._medicos;
        };
        Hospital.prototype.addPacientes = function (paciente) {
            this._pacientes.push(paciente);
        };
        Hospital.prototype.getPaciente = function () {
            return this._pacientes;
        };
        return Hospital;
    }());
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
///<reference path="funcionario.ts" />
var hospital;
(function (hospital) {
    var Medico = /** @class */ (function (_super) {
        __extends(Medico, _super);
        function Medico() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Medico.prototype.setCrm = function (crm) {
            this._crm = crm;
        };
        Medico.prototype.getCrm = function () {
            return this._crm;
        };
        Medico.prototype.setEspecialidade = function (especialidade) {
            this._especialidade = especialidade;
        };
        Medico.prototype.getEspecialidade = function () {
            return this._especialidade;
        };
        return Medico;
    }(hospital.Funcionario));
    hospital.Medico = Medico;
})(hospital || (hospital = {}));
///<reference path="pessoa.ts" />
var hospital;
(function (hospital) {
    var Paciente = /** @class */ (function (_super) {
        __extends(Paciente, _super);
        function Paciente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Paciente.prototype.setCodPaciente = function (codPaciente) {
            this._codPaciente = codPaciente;
        };
        Paciente.prototype.getCodPaciente = function () {
            return this._codPaciente;
        };
        return Paciente;
    }(hospital.Pessoa));
    hospital.Paciente = Paciente;
})(hospital || (hospital = {}));
///<reference path="pessoa.ts" />
///<reference path="paciente.ts" />
///<reference path="funcionario.ts" />
///<reference path="medico.ts" />
///<reference path="enfermeiro.ts" />
///<reference path="hospital.ts" />
var hospital;
(function (hospital_1) {
    //Instanciando hospital;
    var hospital = new hospital_1.Hospital();
    hospital.setNome("hospital juju");
    var medico1 = new hospital_1.Medico();
    medico1.setCrm(1000);
    medico1.setEspecialidade(2);
    medico1.setNome("Juliana");
    medico1.setCpf("600.022.133-20");
    medico1.setCodFuncionario(1);
    var medico2 = new hospital_1.Medico();
    medico2.setCrm(2511);
    medico2.setEspecialidade(1);
    medico2.setNome("Manuela");
    medico2.setCpf("056.012.099-15");
    medico2.setCodFuncionario(2);
    var medico3 = new hospital_1.Medico();
    medico3.setCrm(1164);
    medico3.setEspecialidade(3);
    medico3.setNome("Eduardo");
    medico3.setCpf("125.254.263-25");
    medico3.setCodFuncionario(3);
    var enfermeiro1 = new hospital_1.Enfermeiro();
    enfermeiro1.setCoren(1251);
    enfermeiro1.setNome("Denise");
    enfermeiro1.setCpf("210.263.802-25");
    enfermeiro1.setCodFuncionario(4);
    var enfermeiro2 = new hospital_1.Enfermeiro();
    enfermeiro2.setCoren(2603);
    enfermeiro2.setNome("Bruna");
    enfermeiro2.setCpf("097.120.356-45");
    enfermeiro2.setCodFuncionario(5);
    var enfermeiro3 = new hospital_1.Enfermeiro();
    enfermeiro3.setCoren(1164);
    enfermeiro3.setNome("Eliene");
    enfermeiro3.setCpf("320.136.674-12");
    enfermeiro3.setCodFuncionario(6);
    var paciente1 = new hospital_1.Paciente();
    paciente1.setCodPaciente(1);
    paciente1.setNome("Gabriel");
    paciente1.setCpf("485.141.210-58");
    var paciente2 = new hospital_1.Paciente();
    paciente2.setCodPaciente(2);
    paciente2.setNome("Davi");
    paciente2.setCpf("230.586.145-80");
    var paciente3 = new hospital_1.Paciente();
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
    var tabela_medico = document.getElementById("medico");
    "Hospital JUJU";
    var conteudo = "Medicos: <tr> <td>Nome</td> <td>CPF</td> <td>Código Funcionário</td> <td>CRM</td> <td>Especialidade</td> </tr>";
    hospital.getMedicos().forEach(function (element) {
        conteudo += "<tr> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> <td>" + element.getCodFuncionario() + "</td> <td>" + element.getCrm() + "</td> <td>" + element.getEspecialidade() + "</td> </tr>";
    });
    tabela_medico.innerHTML = conteudo;
    var tabela_enfermeiro = document.getElementById("enfermeiro");
    var conteudo2 = "Enfermeiros: <tr> <td>Nome</td> <td>CPF</td> <td>Código Funcionário</td> <td>Coren</td> </tr>";
    hospital.getEnfermeiros().forEach(function (element) {
        conteudo2 += "<tr> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> <td>" + element.getCodFuncionario() + "</td> <td>" + element.getCoren() + "</td> </tr>";
    });
    tabela_enfermeiro.innerHTML = conteudo2;
    var tabela_paciente = document.getElementById("paciente");
    var conteudo3 = "Pacientes: <tr> <td>Nome</td> <td>CPF</td>  </tr>";
    hospital.getPaciente().forEach(function (element) {
        conteudo3 += "<tr> <td>" + element.getNome() + "</td> <td>" + element.getCpf() + "</td> <td>" + element.getCodPaciente() + "</td> </tr>";
    });
    tabela_paciente.innerHTML = conteudo3;
})(hospital || (hospital = {}));
