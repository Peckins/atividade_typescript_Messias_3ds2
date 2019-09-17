///<reference path="funcionario.ts" />

namespace hospital{

    export class Enfermeiro extends Funcionario{
        private _coren:number;

        public setCoren(coren:number){
            this._coren = coren;
        }

        public getCoren(){
            return this._coren;
        }
    }
}