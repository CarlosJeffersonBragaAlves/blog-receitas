import { ModoDePreparoModel } from './modo-de-preparo-model';
import { IngredienteModel } from './ingrediente-model';
import { StatusModel } from './status-model';
import { TipoModel } from './tipo-model';
export interface ReceitaModel {
  id: number;
  urlImg: string
  destaque: number;
  title: string
  subtitle: string
  time: string
  portions: string
  difficulty: string

  tipoId: number
  tipo: TipoModel

  statusId: number
  status: StatusModel

  ingredientes: IngredienteModel[]
  modoDePreparos: ModoDePreparoModel[]

  index?: number
}
