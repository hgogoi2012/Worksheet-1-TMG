import './intro.scss'

import { useState } from 'react'
import { Button, useToast, Input } from '@chakra-ui/react'



const Intro = (props) => {

    const [id, setId] = useState("")
    const toast = useToast()
    const [loading, setLoading] = useState(false)
    const url =
        "https://script.google.com/macros/s/AKfycbyzT_wK0TF9ea3_mtWM60KSadPSwr7hU9k5_sq0CYcx_cOhZ_79Tdtu-CkBImw-9yDB/exec";

    const handleClick = () => {
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                response.find(function (abc) {
                    if (abc.Pass == id) {
                        props.setAuth(true)
                        props.getData(id);
                        toast({
                            title: 'Sucess',
                            description: "Access Granted to Worksheet #1",
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                        })


                    }

                    setLoading(false)
                    return (console.log("Login Check"))
                });

            });

    };

    const handleChange = (e) => {

        setId(e.target.value)

    }





    const [next, setNext] = useState(false)
    return (
        <div className='intro__container'>
            {next ? <div className='loginContainer'>
                <h1 className='intro__headline'>The Marketing Game</h1>
                <h1 className='intro__userid'>USER ID</h1>

                <Input type="text" className='loginInput' onChange={handleChange} value={id}
                    bg="white" focusBorderColor='blue.400' />
                <Button className="checkBtn" type="button" colorScheme='teal' isLoading={loading ? true : false} onClick={handleClick}>Login</Button>

            </div> :
                <div className='precontainer'>
                    <h1 className='intro__intro'>Introduction</h1>
                    <h1 className='pre__h1'>The scenario:</h1>
                    <p className='pre__para'>
                        Have you ever imagined yourself contributing value to the society by solving major problems thriving in the society? You might have surely, at one point or the other. Have you also felt that your problem solving skills and strategic thinking could provide the Midas touch to an idea, solving the pain points of people ? Voila, we heard you right. </p>
                    <p className='pre__para'>In our unique gamification program, we give you an opportunity to consider yourself in the shoes of a Business Manager of a startup, GogoPogo, which has launced a product for management aspirants & students -  'The Marketing Game'.  The product is a gamification driven upskilling module designed primarily for the management students and aspirants. The game helps the students relate to the core marketing concepts better and apply them in the real business world. </p>
                    <p className='pre__para'>The game is a 2 week program divided into 2 phases, where students will be provided with worksheets in both the phases along with other activities. The first phase needs to be completed within the first week & consists of  5 worksheets that deal with the following topics-</p>
                    <li>
                        <ul><b>Worksheet 1</b>- 4Ps of Marketing</ul>
                        <ul><b>Worksheet 2</b>-STP model- Segmentation Targeting Positioning</ul>
                        <ul><b>Worksheet 3</b>- Features and Benefits</ul>
                        <ul><b>Worksheet 4</b>- Needs, Wants & Demands </ul>
                        <ul><b>Worksheet 5</b>- A. I. D. A Model </ul>
                    </li>
                    <p className='pre__para'>The worksheets have been designed in an extremely fun way with visuals, where the 'Manager You' gets to brush up some quick marketing concepts and apply them to solve a few questions. Come and take a plunge into the world of marketing. Rack your brains and fulfill your managerial dreams. </p>


                    <h1 className='pre__h1'>Here is how the worksheets are designed and how to use it.</h1>
                    <p className='pre__para'>The worksheets have two components - The questions & the answers.</p>
                    <p className='pre__para'>The questions give you a sense of direction. They would be useful whether you (a) join any organisation as a manager in any of the marketing or business development or product management domains OR (b) work for your own startup or small business. The questions are nothing but various lenses to analyse the business you are handling. To provide a standardized format across the globe and to enable the participants to extract more from the game, we are considering ‘the marketing game’ itself as the product of examination and analysis.</p>
                    <p className='pre__para'>In the game you play a double role - Firstly, as a learner (management aspirant or student) and secondly, as a BMI (Business management intern). Since you are a user first, who is using the product to solve his/her own pain points, the learning would be more practical. Now, as a BMI, you will be using the worksheets to deeply analyse the product and the other aspects related to it from a business manager’s perspective.</p>
                    <p className='pre__para'>
                        You need to select the answers to the questions that are asked around our product i.e. The Marketing Game.</p>
                    <p className='pre__para'>The questions are of two types - (a) Quiz - to test your knowledge for correct answer (b) Survey - to understand your viewpoint about the product, the various aspects around it.</p>
                    <Button className="pre__view" colorScheme='blue' onClick={() => setNext(true)}>View Worksheet 1</Button>
                </div>
            }
        </div>
    )
}

export default Intro