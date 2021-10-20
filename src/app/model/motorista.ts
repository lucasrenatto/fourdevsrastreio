export class consultarMotorista {
    
    constructor (public key:string,public cm_cep:string,public cm_cidade:string,
    public cm_cpf:string, public cm_data_nasc:string, public cm_endereco:string,
    public cm_estado:string, public cm_habilitacao:string,public cm_marca_cam:string,
    public cm_nome:string, public cm_placa_cam:string, public cm_rg:string) {

    }

}

export class localizacao {
    constructor (public key:string,public loc_Lat:string, public loc_Long:string, 
    public loc_Caminhao_Quebrado:string,public loc_viagem:string, public loc_Data:string, 
    public loc_Hora:string, public loc_Lat_Final:string, public loc_Lat_Quebrou:string,
    public loc_Lat_Tempo_Real:string, public loc_Long_Final:string, public loc_Long_Quebrou:string,
    public loc_Long_Tempo_Real:string, public loc_Status_Viagem:string, public Loc_Quebrado_Data:string,
    public Loc_Quebrado_Hora:string, public loc_Long_Inicial:string, public loc_Lat_Inicial:string)  {

  }
}


