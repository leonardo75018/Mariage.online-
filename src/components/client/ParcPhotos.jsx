import React from 'react'
import "../../style/HomeClient.scss"
import { motion } from 'framer-motion';





const PhotoHome = ({ parcPhotos, SetselectImg }) => {

    return (

        <div className="img-grid" >
            { parcPhotos && parcPhotos.map(photo => (
                <motion.div className="img-wrap" key={photo.id} onClick={() => SetselectImg(photo.urlPhoto)}
                    whileHover={{ opacity: 1 }}
                >

                    <img src={photo.urlPhoto} alt="weeding photos" />



                </motion.div>

            ))}

        </div>

    )
}


export default PhotoHome; 
