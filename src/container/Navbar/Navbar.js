import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import PdfContainer from '../PdfContainer/PdfContainer'
import './navbar.css'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'


const Navbar = ({ Auth, PDF, setPDF }) => {






    return (
        <div className='navbarContainer'>
            <AnimatePresence> {Auth ? <div className='navbar' onClick={() => setPDF(!PDF)}> {PDF ? <div className="pdfText"><h1>Hide PDF Brochure</h1> <  ArrowUpIcon className="pdfIcon" /></div> : <div className="pdfText"><h1>Show PDF Brochure</h1> <  ArrowDownIcon className="pdfIcon" /></div>}</div> : null}
                {PDF ? <motion.div exit={{ y: -100 }} transition={{ duration: 0.5 }}> <PdfContainer Auth={Auth} /></motion.div> : null} </AnimatePresence>
        </div>
    )
}

export default Navbar