import React from 'react'
import FormikControl from './FormikControl'
import './Level2.scss'
import { Field } from 'formik'
import { motion } from 'framer-motion'

const Level2 = () => {

    const Q1 = [
        { key: 'The Marketing Game', value: 'The Marketing Game' },
        { key: 'Merchandise', value: 'Merchandise' },
        { key: 'GogoPogo', value: 'GogoPogo' }
    ]

    const Q2 = [
        { key: 'All of the above', value: 'All of the above' },
        { key: 'Only 1,2,3,4', value: 'Only 1,2,3,4' },
        { key: 'Only 1,3,5,6', value: 'Only 1,3,5,6' }
    ]
    const Q3 = [
        { key: "Yes, there can't be a better win-win deal where students get to learn as well as earn stipends and certificates at such a minimal price.", value: "Yes, there can't be a better win-win deal where students get to learn as well as earn stipends and certificates at such a minimal price." },
        { key: 'Not sure, I am a bit dubious about the pricing. ', value: 'Not sure, I am a bit dubious about the pricing.' },

    ]
    const Q4 = [
        { key: 'By being invited by an existing player ', value: 'By being invited by an existing player' },
        { key: 'By purchasing from college library', value: 'By purchasing from college library' }
    ]
    const Q5 = [
        { key: 'Saw TV ads in IPL', value: 'Saw TV ads in IPL' },
        { key: 'The startup team reached you', value: 'The startup team reached you' },
        { key: 'Invited by your friend, just like people invite their friends to try Uber , rapido etc. ', value: 'Invited by your friend, just like people invite their friends to try Uber , rapido etc. ' }
    ]
    const Q6 = [
        { key: 'It is the same thing.', value: 'It is the same thing.' },
        { key: 'The USP of this game is actually learning to apply and providing', value: 'The USP of this game is actually learning to apply and providing' }
    ]
    const Q7 = [
        { key: 'Rs. 2499', value: 'Rs. 2499' },
        { key: 'Rs. 4499', value: 'Rs. 4499' },
        { key: 'Rs. 2999', value: 'Rs. 2999' },
        { key: 'Rs. 1999', value: 'Rs. 1999' }
    ]
    const Q8 = [
        { key: 'No offer. MRP is fixed', value: 'By being invited by an existing player' },
        { key: 'Rs. 1500/- discount, as early bird offer for month of April 2022, making the effective price to be Rs. 999', value: 'By purchasing from college library' },
        { key: 'Rs. 500/- additional discount, making the effective price Rs. 499/-  ONLY if upgraded immediately after Worksheet 1.', value: 'By purchasing from college library' }
    ]
    const Q9 = [
        { key: "No. It's an invite only product. ", value: "No. It's an invite only product" },
        { key: "Yes. It's open for all.", value: "Yes. It's open for all." }
    ]
    const Q10 = [
        { key: 'Online ( WhatsApp preferably)', value: 'Online ( WhatsApp preferably)' },
        { key: 'Classroom', value: 'Classroom' }
    ]



    return (
        <motion.div initial={{ opacity: 0 }} transition={{ type: "spring", duration: 0.8, staggerChildren: 0.4 }} animate={{ opacity: 1 }}>
            <h2 className='level2__title'>Worksheet # 1</h2>
            <h1 className='level2__instruction'>Read the brochure and answer the following questions. Some questions do not have any correct answer as those are opinion based and are subjective. </h1>
            <h1 className="work__title">What is the name of the product or service you are offering as a Business Management Intern? [Quiz]</h1>
            <FormikControl
                control='radio'
                options={Q1}
                label=''
                name='Q1'
            />
            <h1 className="work__title">What are some benefits for which the customers choose your product? </h1>

            <ul className='Q2'>
                {['1. Structured marketing experience for resume building', '2. Practical marketing classes to relate better to marketing concepts', '3. Real business lab to apply theoretical marketing concepts', '4. No long term commitments', '5. Can be started for free, and yet receive a certificate hence nothing to lose.', '6. Has the option to upgrade via affordable pricing thereby getting full benefits along with being able to get 100% ROI & beyond as assured stipends, on completion of the game.'].map((item) => (
                    <li key={item}>
                        <ul>
                            {item}
                        </ul>
                    </li>
                ))}
            </ul>
            <FormikControl
                control='radio'
                options={Q2}
                label=''
                name='Q2'
            />
            <h1 className="work__title">Are your prices in line with what your potential customers are willing/able to pay? [Opinion] </h1>

            <FormikControl
                control='radio'
                options={Q3}
                label=''
                name='Q3'
            />
            <h3 className='level2__other'>Any other answer</h3>
            <Field as='textarea' className="level2__textarea" name="Other" />
            <h1 className="work__title">How will customers get access to your product? </h1>
            <FormikControl
                control='radio'
                options={Q4}
                label=''
                name='Q4'
            />
            <h1 className="work__title">Which mode of promotion had reached out to you? </h1>
            <FormikControl
                control='radio'
                options={Q5}
                label=''
                name='Q5'
            />
            <h1 className="work__title">Why should people use this product; when information is available for free on the internet and when there are lots of reputed certified courses available in the market? </h1>
            <FormikControl
                control='radio'
                options={Q6}
                label=''
                name='Q6'
            />
            <h1 className="work__title">What is the MRP?  </h1>
            <FormikControl
                control='radio'
                options={Q7}
                label=''
                name='Q7'
            />
            <h1 className="work__title">What is the special offer available for the current month ?  </h1>
            <FormikControl
                control='radio'
                options={Q8}
                label=''
                name='Q8'
            />
            <h1 className="work__title">Is the product currently accessible to anyone who pays the price? </h1>
            <FormikControl
                control='radio'
                options={Q9}
                label=''
                name='Q9'
            />
            <h1 className="work__title">Where is the game played currently?  </h1>
            <FormikControl
                control='radio'
                options={Q10}
                label=''
                name='Q10'
            />

        </motion.div>
    )
}

export default Level2