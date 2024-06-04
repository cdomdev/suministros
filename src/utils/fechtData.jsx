import axios from "axios";

export const fechtData = async(url) =>{
   try{
    const response = await axios.get(url)
    if(response.status === 200){
        return response
    }else{
        return 'Hubo un error al hacer la solicitud, funcion fechData'
    }
   }catch(e){
    console.log('Error en la solitud')
   }
}
