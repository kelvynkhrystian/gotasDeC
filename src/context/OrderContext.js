import { createContext } from "react";

const OrderContext = createContext(
  { 
    tamanho: null,
    casca: null,
    recheio: null,
    adicional: null,
    nome: null,
    pagamento: null,
    valor: 0,
  });

export default OrderContext;