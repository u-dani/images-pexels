
import styles from './css/Galery.module.css'
import { Image } from './Image';

export const Galery = ({ media, title }) => {

    return (
        <div className={styles.galery}>
            <h1>{title}</h1>
            <div>
                {
                    media.map( m => (
                        <Image
                        key={m.id}
                        photographer_name={m.photographer}
                        photographer_url={m.photographer_url}
                        src_portrait={m.src.portrait}
                        src_alt={m.alt}
                        url={m.url}
                    />
                    ))
                }
            </div>
        </div>
    )
} 