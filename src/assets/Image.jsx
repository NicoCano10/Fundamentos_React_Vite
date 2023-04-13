import { MyButton } from './App'
import Audio from '../tools/Audio1.mp3'

const Image = () => {
    const pathImg = "https://www.semana.com/resizer/OqsEB-89aULdE5y_Gi00HvPP0uY=/arc-anglerfish-arc2-prod-semana/public/26ZZZF6BF5DVTGDCHBNQGGNBNI.jpg";
    return (
        <div>
            <img className="CrisSiiiiiuuuuu" src={pathImg} alt="Imagen del GOAT" />
            <MyButton audio={Audio}>Siiiiiiiuuuuuuu</MyButton>
            <MyButton audio={Audio}>Siiuu jejeje</MyButton>
            <MyButton audio={Audio}>Siiuuuuuuuuuuuuuuuuuuuuu</MyButton>
            <MyButton audio={Audio}>¡Muchas Gracias Aficion, Esto es para vosotros!, <strong>¡¡¡SIIIIIIIIIIIIUUUUUUUUUUUUUUUUUUUU!!!</strong></MyButton>
        </div>)
}

export default Image;