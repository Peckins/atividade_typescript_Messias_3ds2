///<reference path="pessoa.ts" />
namespace hospital {

    export abstract class Funcionario extends Pessoa{
        private _codFuncionario:number;

        public setCodFuncionario(codFuncionario:number) {
            this._codFuncionario = codFuncionario;
        }

        public getCodFuncionario() {
            return this._codFuncionario;
        }
    }

}