import React from 'react'
import "../../style/HomeClient.scss"
import { motion } from 'framer-motion';





const PhotoHome = ({ photos, SetselectImg, close }) => {



    return (

        <div className="img-grid" onClick={close}>
            { photos && photos.map(photo => (
                <motion.div className="img-wrap" key={photo.id} onClick={() => SetselectImg(photo.urlPhoto)}
                    whileHover={{ opacity: 1 }}
                >

                    <img src={photo.urlPhoto} alt="weeding photos" />



                </motion.div>

            ))}

        </div>


























        // <div id="photoRow">

        //     {
        //         photos.map(photo =>
        //             <div key={photo.id} className="photoRow-photo">
        //                 <img src={photo.urlPhoto} alt="" />

        //             </div>

        //         )

        //     }


        // </div>
    )
}


export default PhotoHome; 
