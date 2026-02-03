import React from 'react'
import Container from './Container'
import Heading from './Heading'
import SkillCard from './SkillCard'
import Flex from './Flex'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiVorondesign } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { SiFirebase } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { DiResponsive } from "react-icons/di";
import { RiUserCommunityFill } from "react-icons/ri";


const Skills = () => {
    return (
        <>
            <div className='mt-50  '>
                <Container>
                    <Heading title='My Abilities' Header='My Experience' />
                    <Flex className='justify-between  flex-col lg:flex-row px-4'>
                            <SkillCard
                                Heading='Frontend Development'
                                icons={<FaHtml5 />}
                                icons1={<FaCss3 />}
                                icons2={<FaBootstrap />}
                                icons3={<FaGithubSquare />}
                                icons4={<FaGitAlt />}
                                icons5={<SiVorondesign />}

                                Skills="HTML"
                                Skills1='css'
                                Skills2='Bootstrap '
                                Skills3="GitHub"
                                Skills4='Git'
                                Skills5='UI / UX '

                                subSkil="advanced"
                                subSkil1='advanced'
                                subSki2='advanced'
                                subSkil3='advanced'
                                subSkil4='advanced'
                                subSkil5='advanced'

                            />

                            <SkillCard
                                Heading='Frontend Development'
                                icons={<TbBrandJavascript />}
                                icons1={<FaReact />}
                                icons2={<SiFirebase />}
                                icons3={<FiFigma />}
                                icons4={<DiResponsive />}
                                icons5={<RiUserCommunityFill />}

                                Skills="JavaScript"
                                Skills1='React'
                                Skills2='Firebase '
                                Skills3="Figma"
                                Skills4='Responsive'
                                Skills5='Interaction '

                                subSkil="advanced"
                                subSkil1='advanced'
                                subSki2='advanced'
                                subSkil3='advanced'
                                subSkil4='advanced'
                                subSkil5='advanced'

                            />
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Skills