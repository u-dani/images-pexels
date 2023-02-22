
import styles from './css/Image.module.css'


export const Image = ({ 
    photographer_name, 
    photographer_url,
    src_portrait,
    src_alt,
    url
}) => {
    
    return (
        <div className={styles.image}>
            <img src={src_portrait} alt={src_alt} />
            <div>
                <h1>
                    Fotografia tirada por
                    <span>{photographer_name}</span>
                </h1>
                <div className={styles.links}>
                    <a href={photographer_url} target="_blank">Seguir</a>
                    <span>•</span>
                    <a href={url} target="_blank">Ver no Pexels</a>
                </div>
            </div>
        </div>
    )
}