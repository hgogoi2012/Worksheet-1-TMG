import React from 'react'
import FormikControl from './FormikControl'
import './Level2.scss'
import { Field } from 'formik'

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
        { key: 'Not sure, I am a bit dubious about the pricing. ', value: 'Not Sure' },

    ]
    const Q4 = [
        { key: 'By being invited by an existing player ', value: 'By being invited by an existing player' },
        { key: 'By purchasing from college library', value: 'By purchasing from college library' }
    ]


    return (
        <div>
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

        </div>
    )
}

export default Level2