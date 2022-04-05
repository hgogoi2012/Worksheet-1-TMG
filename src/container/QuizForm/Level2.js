import React from 'react'
import FormikControl from './FormikControl'
import './Level2.scss'

import { motion } from 'framer-motion'
import {
    Table,
    Thead,
    Tbody,

    Tr,
    Th,
    Td,

    TableContainer,
} from '@chakra-ui/react'

const Level2 = () => {

    const Q1 = [
        { key: 'Management students who want to relate to the theoretical marketing concepts better.', value: 'Management students who want to relate to the theoretical marketing concepts better.' },
        { key: 'Students aspiring for Management jobs (specially marketing, business development etc.)', value: 'Students aspiring for Management jobs (specially marketing, business development etc.)' },
        { key: 'B-School aspirants who wish to strengthen their profile so as to get brownie points in interviews.', value: 'B-School aspirants who wish to strengthen their profile so as to get brownie points in interviews.' },
        { key: 'Any student with an inclination for management & marketing etc.', value: 'Any student with an inclination for management & marketing etc.' },
        { key: 'Students who wish to earn extra pocket money and thereby also learn & practise the fundamentals concepts of marketing.', value: 'Students who wish to earn extra pocket money and thereby also learn & practise the fundamentals concepts of marketing.' },
        { key: 'All of the above', value: '- All of the above' },
        { key: 'Only 1,2', value: 'Only 1,2' },
        { key: 'Only 3,4', value: 'Only 3,4' }
    ]

    const Q2 = [
        { key: 'Management students who want to relate to the theoretical marketing concepts better.', value: 'Management students who want to relate to the theoretical marketing concepts better.' },
        { key: 'Students aspiring for Management jobs (specially marketing, business development etc.)', value: 'Students aspiring for Management jobs (specially marketing, business development etc.)' },
        { key: 'B-School aspirants who wish to strengthen their profile so as to get brownie points in interviews.', value: 'B-School aspirants who wish to strengthen their profile so as to get brownie points in interviews.' },
        { key: 'Any student with an inclination for management & marketing etc.', value: 'Any student with an inclination for management & marketing etc.' },
        { key: 'Students who wish to earn extra pocket money and thereby also learn & practise the fundamentals concepts of marketing.', value: 'Students who wish to earn extra pocket money and thereby also learn & practise the fundamentals concepts of marketing.' }
    ]
    const Q3 = [
        { key: "Management students who want to relate to the theoretical marketing concepts better.", value: "Management students who want to relate to the theoretical marketing concepts better." },
        { key: 'Students aspiring for Management jobs (specially marketing, business development etc.)', value: 'Students aspiring for Management jobs (specially marketing, business development etc.)' },
        { key: 'B-School aspirants who wish to strengthen their profile so as to get brownie points in interviews.', value: 'B-School aspirants who wish to strengthen their profile so as to get brownie points in interviews. ' },
        { key: 'Any student with an inclination for management & marketing etc.', value: 'Any student with an inclination for management & marketing etc.' },
        { key: 'Students who wish to earn extra pocket money and thereby also learn & practise the fundamentals concepts of marketing.', value: 'Students who wish to earn extra pocket money and thereby also learn & practise the fundamentals concepts of marketing.' },

    ]
    const Q4 = [
        { key: 'All are correctly matched', value: 'All are correctly matched' },
        { key: '1,3 are wrongly matched', value: '1,3 are wrongly matched' },
        { key: '4,1 are wrongly matched', value: '4,1 are wrongly matched' }
    ]
    const Q5 = [
        { key: 'Practical application of fundamental marketing concepts using worksheets in real scenarios. ', value: 'Practical application of fundamental marketing concepts using worksheets in real scenarios. ' },
        { key: 'Structured business experience to strengthen your resume', value: 'Structured business experience to strengthen your resume' },
        { key: 'Get a strong exposure experience to narrate in interviews', value: 'Get a strong exposure experience to narrate in interviews' },
        { key: 'Real business labs to apply the marketing concepts', value: 'Real business labs to apply the marketing concepts' },
        { key: 'Guaranteed job selection', value: 'Guaranteed job selection' },
    ]




    return (
        <motion.div initial={{ opacity: 0 }} transition={{ type: "spring", duration: 0.8, staggerChildren: 0.4 }} animate={{ opacity: 1 }}>
            <h2 className='level2__title'>Worksheet # 2</h2>
            <h1 className='level2__instruction'>Apply STP Model to frame your strategy</h1>
            <h1 className="work__title">
                1.Which of the following are the various segments that the product "The Marketing Game" caters to ? [Quiz]</h1>
            <FormikControl
                control='radio'
                options={Q1}
                label=''
                name='Q1'
            />
            <h1 className="work__title">2. Which of the segments do you primarily belong to? (Select all that apply) [Subjective]</h1>


            <FormikControl
                control='checkbox'
                options={Q2}
                label=''
                name='Q2'
            />
            <h1 className="work__title">3. Of the given segments, which segment would you like to target to achieve your "5 Star" goals? [Subjective] </h1>

            <FormikControl
                control='radio'
                options={Q3}
                label=''
                name='Q3'
            />

            <h1 className="work__title">4. Match the main positioning messages to each of the segments given below</h1>

            <TableContainer>
                <Table variant='simple' size="sm">

                    <Thead>
                        <Tr >
                            <Th w="45%">abc</Th>
                            <Th w="45%">Main positioning message</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td w="45%">Management students</Td>
                            <Td w="45%">Get a chance to relate to the classroom marketing concepts better using a practical and real-world approach. </Td>

                        </Tr>
                        <Tr>
                            <Td w="45%">Students aspiring for

                                Management jobst</Td>
                            <Td w="45%">Get a structured and guided practical exposure for interviews in addition to strengthening your resume. </Td>

                        </Tr>
                        <Tr>
                            <Td
                                w="45%">B-school aspirants looking for resume building</Td>
                            <Td
                                w="45%">Earn extra brownie points for interviews through a practical approach to business concepts and also to strengthen your resume. </Td>

                        </Tr>
                        <Tr>
                            <Td
                                w="45%">Any student with an inclination towards management & marketing</Td>
                            <Td
                                w="45%">Learn the core marketing concepts in a visually appealing way and apply them in real business situations. Also, special brownie points for interviews and a strong resume to stand out in the crowd. </Td>

                        </Tr>
                        <Tr>
                            <Td
                                w="45%">Students who wish to earn extra pocket money and also have a penchant towards marketing and business</Td>
                            <Td
                                w="45%">Earn some extra bucks even before getting a real job, but in addition, learn some quick marketing concepts and apply them in real business situations. </Td>

                        </Tr>
                    </Tbody>

                </Table>
            </TableContainer >

            <FormikControl
                control='radio'
                options={Q4}
                label=''
                name='Q4'
            />
            <h1 className="work__title">5. What are the pictures that come to your mind when you hear about the product 'The Marketing Game'? (hint:pay special attention, the options might include wrong ones too)  </h1>
            <FormikControl
                control='checkbox'
                options={Q5}
                label=''
                name='Q5'
            />


        </motion.div >
    )
}

export default Level2