import React from 'react'
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './pdfContainer.scss'

const PdfContainer = ({ Auth }) => {
    return (
        <div> {Auth ? <motion.div

            whileInView={{ y: [0, 20] }} exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }} className='pdfContainer'>

            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0001.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0002.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />

            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0003.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0004.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0005.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0006.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0007.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0008.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0009.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0003.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0010.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0011.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0012.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0013.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
            <LazyLoadImage
                alt='image1'
                height="100vh"
                src="https://cdn.shopify.com/s/files/1/0165/7654/4822/files/The_Marketing_game_-TMG__page-0014.jpg?v=1648907154" // use normal <img> attributes as props
                width="auto" />
        </motion.div> : null}</div>
    )
}

export default PdfContainer